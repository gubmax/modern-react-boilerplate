import { readFileSync } from 'fs'

import { renderToString } from 'react-dom/server'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestExpressApplication } from '@nestjs/platform-express'
import type { Request, Response } from 'express'
import { createServer, ModuleNode, ViteDevServer } from 'vite'

import viteDevServerConfig from 'client/vite.config.server'
import { CONFIG_ENTRIES } from 'server/config'
import { HtmlMarks } from 'server/src/common/constants/html'
import { HtmlEntries } from 'shared/constants/entries'
import { PATH_RESOLVED_INDEX_HTML } from 'shared/constants/paths'
import { InternalServerException } from 'shared/exceptions/exceptions'
import { RenderTemplate } from 'shared/typings/renderTemplate'
import { DevelopmentAssetCollectorService } from '../assetCollector'
import { ClientConfigService } from '../clientConfig'
import { HttpClientService } from '../httpClient'
import { RenderService } from './render.service'
import { fetchPageProps } from './utils/fetchPageProps'
import { writeTemplate } from './utils/writeTemplate'

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

  async renderMainEntry(req: Request, res: Response): Promise<void> {
    const { entryDevPath, moduleDevPath } = CONFIG_ENTRIES[HtmlEntries.MAIN]

    // Client config

    const clientConfig = this.clientConfig.create(req)

    // Render client

    let html = this.readHtmlSync()
    html = this.assetCollector.injectUrls(html, [{ url: moduleDevPath, isEntry: true }])

    const [template, appModule, { renderTemplate }] = await this.renderTemplate<{
      renderTemplate: RenderTemplate
    }>(req.url, entryDevPath, html)

    const serverSideProps = await fetchPageProps(req.url, this.httpClient)
    const app = renderTemplate({ url: req.url, clientConfig, serverSideProps })

    // Inject assets

    html = this.assetCollector.injectByModule(template, appModule)

    // Write

    writeTemplate({ html, app, res, clientConfig, serverSideProps })
  }

  private renderBaseEntry(status: number, entry: HtmlEntries) {
    return async (req: Request, res: Response): Promise<void> => {
      const { entryDevPath, moduleDevPath } = CONFIG_ENTRIES[entry]

      let html = this.readHtmlSync()
      html = this.assetCollector.injectUrls(html, [{ url: moduleDevPath, isEntry: true }])

      const [template, appModule, { renderTemplate }] = await this.renderTemplate<{
        renderTemplate: RenderTemplate
      }>(req.url, entryDevPath, html)

      html = template
      html = this.assetCollector.injectByModule(html, appModule)

      const app = renderTemplate()
      const markup = renderToString(app)

      html = html.replace(HtmlMarks.SSR_OUTLET, markup)

      res.status(status).set({ 'Content-Type': 'text/html' }).send(html)
    }
  }

  async renderInternalErrorEntry(req: Request, res: Response): Promise<void> {
    return this.renderBaseEntry(500, HtmlEntries.INTERNAL_ERROR)(req, res)
  }

  async renderNotFoundEntry(req: Request, res: Response): Promise<void> {
    return this.renderBaseEntry(404, HtmlEntries.NOT_FOUND)(req, res)
  }
}
