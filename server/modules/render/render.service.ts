import { readFileSync } from 'fs'
import { Injectable } from '@nestjs/common'
import { NestExpressApplication } from '@nestjs/platform-express'
import type { Request, Response } from 'express'
import { createServer, ViteDevServer } from 'vite'
import { matchPath } from 'react-router'

import { InternalServerException } from 'shared/domain/exceptions'
import { resolveApp } from 'server/helpers'
import type { renderClient as RenderClient } from 'server/renderClient'
import { CONFIG_STATIC_ROUTES, CONFIG_VITE_DEV_SERVER } from 'server/config'
import { collectCss, injectCss, writeTemplate } from './utils'
import type { PreloadUrls } from './types'
import { PageRoutes } from 'src/infra/http'

const PATH_CLIENT = resolveApp('dist/client')
const PATH_PROD_INDEX_HTML = resolveApp('dist/client/index.html')
const PATH_PROD_RENDER = resolveApp('dist/server/renderClient')
const PATH_DEV_INDEX_HTML = resolveApp('index.html')
const PATH_DEV_RENDER = 'server/renderClient'
const PATH_APP_MODULE = '/src/components/layout/App/index.ts'

@Injectable()
export class RenderService {
  private devServer?: ViteDevServer

  /**
   * Production render function.
   */
  async render(req: Request, res: Response): Promise<void> {
    // Send pre-rendered template
    for (const route in CONFIG_STATIC_ROUTES) {
      if (matchPath(route, req.url)) {
        const fileName = route === '/' ? PageRoutes.ABOUT : route
        return res.sendFile(`${PATH_CLIENT}${fileName}.html`)
      }
    }

    // Render template

    const template = readFileSync(PATH_PROD_INDEX_HTML, 'utf-8')
    const { renderClient } = (await import(PATH_PROD_RENDER)) as {
      renderClient: typeof RenderClient
    }

    const appHtml = renderClient(req.url)

    writeTemplate(template, appHtml, res)
  }

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
  async renderDev(req: Request, res: Response): Promise<void> {
    const { devServer } = this

    if (!devServer) {
      throw new InternalServerException('Vite dev server has not been initialized')
    }

    const url = req.originalUrl
    const visitedModules = new Set<string>()
    const preloadUrls: PreloadUrls = {
      css: new Set<string>(),
    }

    try {
      const html = readFileSync(PATH_DEV_INDEX_HTML, 'utf-8')
      let template = await devServer.transformIndexHtml(url, html)

      const mod = await devServer.moduleGraph.getModuleByUrl(PATH_APP_MODULE)
      collectCss(mod, preloadUrls, visitedModules)
      template = injectCss(template, preloadUrls)

      const renderModule = await devServer.ssrLoadModule(PATH_DEV_RENDER)
      const appHtml = (renderModule.renderClient as typeof RenderClient)(url)

      writeTemplate(template, appHtml, res)
    } catch (error: unknown) {
      if (error instanceof Error) {
        devServer.ssrFixStacktrace(error)
      }

      throw error
    }
  }
}
