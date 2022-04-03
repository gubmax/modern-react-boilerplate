import { readFileSync } from 'fs'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import type { Request, Response } from 'express'
import { matchPath } from 'react-router'
import { Manifest } from 'vite'

import {
  PATH_RESOLVED_CLIENT,
  PATH_RESOLVED_INDEX_HTML,
  PATH_RESOLVED_CLIENT_MANIFEST,
} from 'shared/constants/paths'
import { CONFIG_ENTRIES, CONFIG_SSG_ROUTES, CONFIG_SSR_ROUTES } from 'server/config'
import { renderServerMainTemplate as RenderServerMainTemplate } from 'client/src/entries/main.server.entry'
import { HttpClientService } from '../httpClient'
import { AssetCollectorService } from '../assetCollector'
import { UserAgentParserService } from '../userAgentParser'
import { fetchPageProps } from './utils/fetchPageProps'
import { writeTemplate } from './utils/writeTemplate'
import { HtmlEntries } from 'shared/constants/entries'

@Injectable()
export class RenderService {
  protected indexHtml = ''

  constructor(
    protected readonly config: ConfigService,
    protected readonly httpClient: HttpClientService,
    protected readonly assetCollector: AssetCollectorService,
    protected readonly userAgentParser: UserAgentParserService,
  ) {}

  init(): void {
    const manifest = JSON.parse(readFileSync(PATH_RESOLVED_CLIENT_MANIFEST, 'utf-8')) as Manifest

    this.assetCollector.manifest = manifest
    this.indexHtml = readFileSync(PATH_RESOLVED_INDEX_HTML, 'utf-8')
  }

  protected getDeviceType(req: Request): string | undefined {
    const userAgent = this.userAgentParser.create(req.headers['user-agent'])
    const { type } = userAgent.getDevice()
    return type
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

    const clientConfig = {
      deviceType: this.getDeviceType(req),
    }

    // Render client

    const { entryPath } = CONFIG_ENTRIES[HtmlEntries.MAIN]

    const [serverSideProps, { renderServerMainTemplate }] = await Promise.all([
      fetchPageProps(req.url, this.httpClient),
      (await require(entryPath)) as {
        renderServerMainTemplate: typeof RenderServerMainTemplate
      },
    ])

    const app = renderServerMainTemplate(req.url, clientConfig, serverSideProps)

    // Inject assets

    const { imports = [] } = CONFIG_SSR_ROUTES[req.url] || {}
    const html = this.assetCollector.injectByModulePaths(this.indexHtml, imports)

    // Write

    writeTemplate({ html, app, res, clientConfig, serverSideProps })
  }

  renderInternalErrorEntry(req: Request, res: Response): void {
    res.sendFile(`${PATH_RESOLVED_CLIENT}/${HtmlEntries.INTERNAL_ERROR}.html`)
  }
}
