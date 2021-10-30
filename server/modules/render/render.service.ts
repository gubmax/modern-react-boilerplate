import { readFileSync } from 'fs'
import { Injectable } from '@nestjs/common'
import type { Request, Response } from 'express'
import { matchPath } from 'react-router'

import type { renderClient as RenderClient } from 'server/renderClient'
import { CONFIG_SSG_ROUTES, CONFIG_SSR_ROUTES } from 'server/config'
import { AssetsInjector, fetchPageProps, writeTemplate } from './utils'
import {
  PATH_RESOLVED_DIST_RENDER,
  PATH_RESOLVED_DIST_INDEX_HTML,
  PATH_RESOLVED_DIST_CLIENT,
  PATH_DIST_MANIFEST,
  HtmlMarks,
} from 'server/common/constants'
import { HttpClientService } from '../httpClient/httpClient.service'
import { Manifest } from 'vite'

@Injectable()
export class RenderService {
  html = ''
  manifest: Manifest = {}

  constructor(protected readonly httpClientService: HttpClientService) {}

  async init(): Promise<void> {
    this.html = readFileSync(PATH_RESOLVED_DIST_INDEX_HTML, 'utf-8')

    const distManifestPath = PATH_DIST_MANIFEST
    this.manifest = (await import(distManifestPath)) as Manifest
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

    // Render client

    const renderModulePath = PATH_RESOLVED_DIST_RENDER
    const [serverSideProps, { renderClient }] = await Promise.all([
      fetchPageProps(req.url, this.httpClientService),
      import(renderModulePath) as Promise<{ renderClient: typeof RenderClient }>,
    ])

    const app = renderClient(req.url, serverSideProps)

    // Inject assets

    const { imports = [] } = CONFIG_SSR_ROUTES[req.url] || {}
    const assetsInjector = new AssetsInjector({ manifest: this.manifest, mark: HtmlMarks.ASSETS })

    const html = assetsInjector.injectByModulePaths(this.html, imports)

    // Write

    writeTemplate({ html, app, res, serverSideProps })
  }
}
