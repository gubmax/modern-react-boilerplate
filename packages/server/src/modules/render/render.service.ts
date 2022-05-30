import { readFileSync } from 'fs'

import { matchPath } from 'react-router'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import type { Request, Response } from 'express'
import { Manifest } from 'vite'

import { CONFIG_ENTRIES, CONFIG_SSG_ROUTES } from 'server/config'
import { HtmlEntries } from 'shared/constants/entries'
import {
  PATH_RESOLVED_CLIENT,
  PATH_RESOLVED_CLIENT_MANIFEST,
  PATH_RESOLVED_INDEX_HTML,
} from 'shared/constants/paths'
import { RenderTemplate } from 'shared/typings/renderTemplate'
import { AssetCollectorService } from '../assetCollector'
import { ClientConfigService } from '../clientConfig'
import { HttpClientService } from '../httpClient'
import { fetchPageProps } from './utils/fetchPageProps'
import { writeTemplate } from './utils/writeTemplate'

@Injectable()
export class RenderService {
  protected indexHtml = ''

  constructor(
    protected readonly assetCollector: AssetCollectorService,
    protected readonly clientConfig: ClientConfigService,
    protected readonly config: ConfigService,
    protected readonly httpClient: HttpClientService,
  ) {}

  init(): void {
    const manifest = JSON.parse(readFileSync(PATH_RESOLVED_CLIENT_MANIFEST, 'utf-8')) as Manifest

    this.assetCollector.manifest = manifest
    this.indexHtml = readFileSync(PATH_RESOLVED_INDEX_HTML, 'utf-8')
  }

  private sendPreRenderedTemplate(url: string, res: Response): boolean {
    for (const route in CONFIG_SSG_ROUTES) {
      if (matchPath(route, url)) {
        res.sendFile(`${PATH_RESOLVED_CLIENT}/${CONFIG_SSG_ROUTES[route]}.html`)
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

    // Client config

    const clientConfig = this.clientConfig.create(req)

    // Render client

    const { entryPath, modulePath } = CONFIG_ENTRIES[HtmlEntries.MAIN]

    const [serverSideProps, { renderTemplate }] = await Promise.all([
      fetchPageProps(req.url, this.httpClient),
      (await require(entryPath)) as {
        renderTemplate: RenderTemplate
      },
    ])

    const app = renderTemplate({ url: req.url, clientConfig, serverSideProps })

    // Inject assets

    const html = this.assetCollector.injectByModulePaths(this.indexHtml, [modulePath])

    // Write

    writeTemplate({ html, app, res, clientConfig, serverSideProps })
  }

  renderInternalErrorEntry(req: Request, res: Response): void {
    res.sendFile(`${PATH_RESOLVED_CLIENT}/${HtmlEntries.INTERNAL_ERROR}.html`)
  }
}
