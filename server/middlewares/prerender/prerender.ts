import { readFileSync } from 'fs'
import type { Request, Response } from 'express'
import type { ViteDevServer } from 'vite'

import type Render from 'server/render'
import { resolveApp } from '../../helpers'
import { writeTemplate } from './writeTemplate'
import type { PreloadUrls } from './types'
import { collectCss, injectCss } from './css'

export function prerenderMiddleware(req: Request, res: Response): void {
  const exec = async () => {
    const template = readFileSync(resolveApp('dist/client/index.html'), 'utf-8')

    const { default: render } = (await import(resolveApp('dist/server/render'))) as {
      default: typeof Render
    }

    const appHtml = render(req.originalUrl)

    writeTemplate(template, appHtml, res)
  }

  try {
    void exec()
  } catch (error: unknown) {
    console.log(error)
    res.status(500).end(error)
  }
}

export function prerenderDevMiddleware(
  devServer: ViteDevServer,
): (req: Request, res: Response) => void {
  return (req: Request, res: Response) => {
    const visitedModules = new Set<string>()
    const preloadUrls: PreloadUrls = {
      css: new Set<string>(),
    }

    const exec = async () => {
      const url = req.originalUrl
      const html = readFileSync(resolveApp('index.html'), 'utf-8')
      let template = await devServer.transformIndexHtml(url, html)

      const mod = await devServer.moduleGraph.getModuleByUrl('/src/components/layout/App/index.ts')
      collectCss(mod, preloadUrls, visitedModules)
      template = injectCss(template, preloadUrls)

      const { default: render } = (await devServer.ssrLoadModule('server/render')) as {
        default: typeof Render
      }
      const appHtml = render(url)

      writeTemplate(template, appHtml, res)
    }
    try {
      void exec()
    } catch (error: unknown) {
      if (error instanceof Error) {
        devServer.ssrFixStacktrace(error)
      }

      console.log(error)
      res.status(500).end(error)
    }
  }
}
