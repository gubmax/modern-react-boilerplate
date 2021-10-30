import { readFileSync } from 'fs'
import { Injectable } from '@nestjs/common'
import { NestExpressApplication } from '@nestjs/platform-express'
import type { Request, Response } from 'express'
import { createServer, ViteDevServer } from 'vite'

import { InternalServerException } from 'shared/exceptions'
import viteDevServerConfig from 'server/vite.config'
import {
  PATH_RESOLVED_DEV_INDEX_HTML,
  PATH_RENDER,
  PATH_CLIENT_APP_MODULE,
  HtmlMarks,
  PATH_CLIENT_MAIN_MODULE,
} from 'server/common/constants'
import type { renderClient as RenderClient } from 'server/renderClient'
import { DevelopmentAssetsInjector, fetchPageProps, writeTemplate } from './utils'
import { RenderService } from './render.service'

@Injectable()
export class DevelopmentRenderService extends RenderService {
  private devServer?: ViteDevServer

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
  async render(req: Request, res: Response): Promise<void> {
    const { devServer } = this

    if (!devServer) {
      throw new InternalServerException('Vite dev server has not been initialized')
    }

    const { url } = req

    try {
      let html = readFileSync(PATH_RESOLVED_DEV_INDEX_HTML, 'utf-8')

      const assetsInjector = new DevelopmentAssetsInjector({ mark: HtmlMarks.ASSETS })
      html = assetsInjector.injectUrls(html, [PATH_CLIENT_MAIN_MODULE])

      const [template, appModule, { renderClient }, serverSideProps] = await Promise.all([
        devServer.transformIndexHtml(url, html),
        devServer.moduleGraph.getModuleByUrl(`/${PATH_CLIENT_APP_MODULE}`),
        devServer.ssrLoadModule(PATH_RENDER) as Promise<{ renderClient: typeof RenderClient }>,
        fetchPageProps(url, this.httpClientService),
      ])

      html = assetsInjector.injectByModule(template, appModule)

      const app = renderClient(url, serverSideProps)

      writeTemplate({ html, app, res, serverSideProps })
    } catch (error: unknown) {
      if (error instanceof Error) {
        devServer.ssrFixStacktrace(error)
      }

      throw error
    }
  }
}
