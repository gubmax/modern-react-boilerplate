import { readFileSync } from 'fs'
import { Injectable } from '@nestjs/common'
import { NestExpressApplication } from '@nestjs/platform-express'
import type { Request, Response } from 'express'
import { createServer, ViteDevServer } from 'vite'
import { matchPath } from 'react-router'

import { InternalServerException } from 'shared/exceptions'
import type { renderClient as RenderClient } from 'server/renderClient'
import { CONFIG_SSR_ROUTES, CONFIG_SSG_ROUTES, CONFIG_VITE_DEV_SERVER } from 'server/config'
import { collectCss, injectCss, writeTemplate } from './utils'
import type { PreloadUrls } from './types'
import { ServerSideProps } from 'src/common/contexts'
import {
  PATH_RESOLVED_DIST_RENDER,
  PATH_RESOLVED_DIST_INDEX_HTML,
  PATH_RESOLVED_DEV_INDEX_HTML,
  PATH_RENDER,
  PATH_RESOLVED_DIST_CLIENT,
  PATH_CLIENT_APP_MODULE,
  PATH_RESOLVED_CLIENT_PAGES,
} from 'server/common/constants'

@Injectable()
export class RenderService {
  private devServer?: ViteDevServer

  async fetchPageData(url: string): Promise<ServerSideProps> {
    const pageName = CONFIG_SSR_ROUTES[url]

    if (!pageName) return {}

    const pageModulePath = PATH_RESOLVED_CLIENT_PAGES
    const { getServerSideProps } = (await import(`${pageModulePath}/${pageName}`)) as {
      getServerSideProps?: () => Promise<ServerSideProps>
    }

    if (!getServerSideProps) {
      throw new InternalServerException(
        `Function "getServerSideProps" not found for page "${pageName}"`,
      )
    }

    return getServerSideProps()
  }

  /**
   * Production render function.
   */
  async render(req: Request, res: Response): Promise<void> {
    // Send pre-rendered template
    for (const route in CONFIG_SSG_ROUTES) {
      if (matchPath(route, req.url)) {
        return res.sendFile(`${PATH_RESOLVED_DIST_CLIENT}/${CONFIG_SSG_ROUTES[route]}.html`)
      }
    }

    // Render template

    const serverSideProps = await this.fetchPageData(req.url)

    const template = readFileSync(PATH_RESOLVED_DIST_INDEX_HTML, 'utf-8')
    const renderModulePath = PATH_RESOLVED_DIST_RENDER
    const { renderClient } = (await import(renderModulePath)) as {
      renderClient: typeof RenderClient
    }

    const appHtml = renderClient(req.url, serverSideProps)
    writeTemplate(template, appHtml, res, serverSideProps)
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

    const { url } = req
    const visitedModules = new Set<string>()
    const preloadUrls: PreloadUrls = {
      css: new Set<string>(),
    }

    try {
      const html = readFileSync(PATH_RESOLVED_DEV_INDEX_HTML, 'utf-8')
      let template = await devServer.transformIndexHtml(url, html)

      const mod = await devServer.moduleGraph.getModuleByUrl(`/${PATH_CLIENT_APP_MODULE}`)
      collectCss(mod, preloadUrls, visitedModules)
      template = injectCss(template, preloadUrls)

      const renderModule = await devServer.ssrLoadModule(PATH_RENDER)
      const serverSideProps = await this.fetchPageData(url)
      const appHtml = (renderModule.renderClient as typeof RenderClient)(url, serverSideProps)

      writeTemplate(template, appHtml, res, serverSideProps)
    } catch (error: unknown) {
      if (error instanceof Error) {
        devServer.ssrFixStacktrace(error)
      }

      throw error
    }
  }
}
