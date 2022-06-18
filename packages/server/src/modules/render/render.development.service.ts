import { readFileSync } from 'node:fs'

import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestExpressApplication } from '@nestjs/platform-express'
import type { Request, Response } from 'express'
import { createServer, ModuleNode, ViteDevServer } from 'vite'

import viteDevServerConfig from 'client/vite.config.server'
import { CONFIG_ENTRIES } from 'server/config'
import { HtmlEntries } from 'shared/constants/entries'
import { PATH_RESOLVED_INDEX_HTML } from 'shared/constants/paths'
import { InternalServerException } from 'shared/exceptions/exceptions'
import { RenderTemplate } from 'shared/typings/renderTemplate'
import { DevelopmentAssetCollectorService } from '../assetCollector'
import { ClientConfigService } from '../clientConfig'
import { HttpClientService } from '../httpClient'
import { RenderService } from './render.service'

@Injectable()
export class DevelopmentRenderService extends RenderService {
  private devServer?: ViteDevServer

  constructor(
    protected readonly assetCollector: DevelopmentAssetCollectorService,
    protected readonly clientConfig: ClientConfigService,
    protected readonly config: ConfigService,
    protected readonly httpClient: HttpClientService,
  ) {
    super(assetCollector, clientConfig, config, httpClient)
  }

  /**
   * Initializes Vite development server.
   */
  async setupDevServer(app: NestExpressApplication): Promise<void> {
    const devServer = await createServer(viteDevServerConfig)
    app.use(devServer.middlewares)
    this.devServer = devServer
  }

  /**
   * Development render function.
   * Before use, you need to call fn setupDevServer once.
   */
  private async renderTemplate<RenderModule extends Record<string, unknown>>(
    url: string,
    entryDevPath: string,
    html: string,
  ): Promise<[string, ModuleNode | undefined, RenderModule]> {
    const { devServer } = this

    if (!devServer) {
      throw new InternalServerException('Vite dev server has not been initialized')
    }

    try {
      const [template, appModule, templateModule] = await Promise.all([
        devServer.transformIndexHtml(url, html),
        devServer.moduleGraph.getModuleByUrl(entryDevPath),
        devServer.ssrLoadModule(entryDevPath) as Promise<RenderModule>,
      ])

      return [template, appModule, templateModule]
    } catch (error: unknown) {
      if (error instanceof Error) {
        devServer.ssrFixStacktrace(error)
      }

      throw error
    }
  }

  private readHtmlSync(): string {
    return readFileSync(PATH_RESOLVED_INDEX_HTML, 'utf-8')
  }

  protected renderBaseEntry(statusCode: number, entry: HtmlEntries) {
    return async (req: Request, res: Response): Promise<void> => {
      // Client config

      const clientConfig = this.clientConfig.create(req)

      // Render client

      const { entryDevPath, moduleDevPath } = CONFIG_ENTRIES[entry]

      let html = this.readHtmlSync()
      html = this.assetCollector.injectUrls(html, [{ url: moduleDevPath, isEntry: true }])

      const [serverSideProps, [template, appModule, { renderTemplate }]] = await Promise.all([
        this.fetchPageProps(req.url, this.httpClient),
        this.renderTemplate<{
          renderTemplate: RenderTemplate
        }>(req.url, entryDevPath, html),
      ])

      const app = renderTemplate({ url: req.url, clientConfig, serverSideProps })

      // Inject assets

      html = this.assetCollector.injectByModule(template, appModule)

      // Write

      this.writeTemplate({ statusCode, html, app, res, clientConfig, serverSideProps })
    }
  }
}
