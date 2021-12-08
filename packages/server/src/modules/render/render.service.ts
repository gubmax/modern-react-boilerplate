import { readFileSync } from 'fs'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import type { Request, Response } from 'express'
import { matchPath } from 'react-router'
import { Manifest } from 'vite'

import { CONFIG_ENTRIES, CONFIG_SSG_ROUTES, CONFIG_SSR_ROUTES } from 'server/config'
import {
  PATH_RESOLVED_DIST_CLIENT,
  PATH_RESOLVED_DIST_INDEX_HTML,
  PATH_RESOLVED_DIST_MANIFEST,
} from 'shared/constants/paths'
import { HtmlEntries } from 'server/src/common/constants'
import { renderServerMainTemplate as RenderServerMainTemplate } from 'client/src/entries/main.server.entry'
import { HttpClientService } from '../httpClient'
import { AssetCollectorService } from '../assetCollector'
import { fetchPageProps, writeTemplate } from './utils'

@Injectable()
export class RenderService {
  protected indexHtml = ''

  constructor(
    protected readonly config: ConfigService,
    protected readonly httpClient: HttpClientService,
    protected assetCollector: AssetCollectorService,
  ) {}

  async init(): Promise<void> {
    const distManifestPath = PATH_RESOLVED_DIST_MANIFEST
    const manifest = (await import(distManifestPath)) as Manifest

    this.assetCollector.manifest = manifest
    this.indexHtml = readFileSync(PATH_RESOLVED_DIST_INDEX_HTML, 'utf-8')
  }

  private sendPreRenderedTemplate(url: string, res: Response): boolean {
    for (const route in CONFIG_SSG_ROUTES) {
      if (matchPath(route, url)) {
        res.sendFile(`${PATH_RESOLVED_DIST_CLIENT}/${CONFIG_SSG_ROUTES[route]}.html`)
        return true
      }
    }

    return false
  }

  /**
   * Production render function.
   */
  async renderMainEntry(req: Request, res: Response): Promise<void> {
    const hasBeenSent = this.sendPreRenderedTemplate(req.url, res)
    if (hasBeenSent) return

    // Render client

    const { entryPath } = CONFIG_ENTRIES[HtmlEntries.MAIN]

    const [serverSideProps, { renderServerMainTemplate }] = await Promise.all([
      fetchPageProps(req.url, this.httpClient),
      import(entryPath) as Promise<{
        renderServerMainTemplate: typeof RenderServerMainTemplate
      }>,
    ])

    const app = renderServerMainTemplate(req.url, serverSideProps)

    // Inject assets

    const { imports = [] } = CONFIG_SSR_ROUTES[req.url] || {}
    const html = this.assetCollector?.injectByModulePaths(this.indexHtml, imports)

    // Write

    writeTemplate({ html, app, res, serverSideProps })
  }

  renderInternalErrorEntry(req: Request, res: Response): void {
    res.sendFile(`${PATH_RESOLVED_DIST_CLIENT}/${HtmlEntries.INTERNAL_ERROR}.html`)
  }
}
