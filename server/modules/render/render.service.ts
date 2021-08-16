import { readFileSync } from 'fs'
import { Injectable } from '@nestjs/common'
import { NestExpressApplication } from '@nestjs/platform-express'
import type { Request, Response } from 'express'
import { createServer, ViteDevServer } from 'vite'

import { InternalServerException } from 'shared/domain/exceptions'
import { resolveApp } from 'server/helpers'
import type { render as Render } from 'server/render'
import { CONFIG_VITE_DEV_SERVER } from 'server/config'
import { collectCss, injectCss, writeTemplate } from './utils'
import type { PreloadUrls } from './types'

const URL_PROD_INDEX_HTML = 'dist/client/index.html'
const URL_PROD_RENDER = 'dist/server/render'
const URL_DEV_INDEX_HTML = 'index.html'
const URL_DEV_RENDER = 'server/render'
const URL_APP_MODULE = '/src/components/layout/App/index.ts'

@Injectable()
export class RenderService {
  private devServer?: ViteDevServer

  /**
   * Production render function.
   */
  async render(req: Request, res: Response): Promise<void> {
    const template = readFileSync(resolveApp(URL_PROD_INDEX_HTML), 'utf-8')

    const { render } = (await import(resolveApp(URL_PROD_RENDER))) as {
      render: typeof Render
    }

    const appHtml = render(req.originalUrl)

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
      const html = readFileSync(resolveApp(URL_DEV_INDEX_HTML), 'utf-8')
      let template = await devServer.transformIndexHtml(url, html)

      const mod = await devServer.moduleGraph.getModuleByUrl(URL_APP_MODULE)
      collectCss(mod, preloadUrls, visitedModules)
      template = injectCss(template, preloadUrls)

      const renderModule = await devServer.ssrLoadModule(URL_DEV_RENDER)
      const appHtml = (renderModule.render as typeof Render)(url)

      writeTemplate(template, appHtml, res)
    } catch (error: unknown) {
      if (error instanceof Error) {
        devServer.ssrFixStacktrace(error)
      }

      throw error
    }
  }
}
