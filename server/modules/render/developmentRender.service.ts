import { readFileSync } from 'fs'
import { Injectable } from '@nestjs/common'
import { NestExpressApplication } from '@nestjs/platform-express'
import type { Request, Response } from 'express'
import { createServer, ViteDevServer } from 'vite'

import { InternalServerException } from 'shared/exceptions'
import {
  PATH_RESOLVED_DEV_INDEX_HTML,
  PATH_RENDER,
  PATH_CLIENT_APP_MODULE,
} from 'server/common/constants'
import { CONFIG_VITE_DEV_SERVER } from 'server/config'
import type { renderClient as RenderClient } from 'server/renderClient'
import { collectCss, fetchPageProps, injectCss, writeTemplate } from './utils'
import type { PreloadUrls } from './types'
import { RenderService } from './render.service'

@Injectable()
export class DevelopmentRenderService implements RenderService {
  private devServer?: ViteDevServer

  /**
   * Initializes Vite development server.
   */
  async setupDevServer(app: NestExpressApplication): Promise<void> {
    const devServer = await createServer(CONFIG_VITE_DEV_SERVER)
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
    const visitedModules = new Set<string>()
    const preloadUrls: PreloadUrls = {
      css: new Set<string>(),
    }

    try {
      const html = readFileSync(PATH_RESOLVED_DEV_INDEX_HTML, 'utf-8')

      const results = await Promise.all([
        devServer.transformIndexHtml(url, html),
        devServer.moduleGraph.getModuleByUrl(`/${PATH_CLIENT_APP_MODULE}`),
        devServer.ssrLoadModule(PATH_RENDER) as Promise<{ renderClient: typeof RenderClient }>,
        fetchPageProps(url),
      ])

      const [, appModule, { renderClient }, serverSideProps] = results
      let [template] = results

      collectCss(appModule, preloadUrls, visitedModules)
      template = injectCss(template, preloadUrls)

      const appHtml = renderClient(url, serverSideProps)

      writeTemplate(template, appHtml, res, serverSideProps)
    } catch (error: unknown) {
      if (error instanceof Error) {
        devServer.ssrFixStacktrace(error)
      }

      throw error
    }
  }
}
