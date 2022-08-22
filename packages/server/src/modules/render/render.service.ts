import { readFileSync } from 'node:fs'

import { renderToPipeableStream } from 'react-dom/server'
import { matchPath } from 'react-router'
import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import type { Request, Response } from 'express'
import { Manifest } from 'vite'

import { CONFIG_ENTRIES, CONFIG_SSG_ROUTES, CONFIG_SSR_ROUTES } from 'server/config'
import { HtmlMarks } from 'server/src/common/constants/html'
import { CLIENT_CONFIG, ClientConfig } from 'shared/constants/clientConfig'
import { HtmlEntries } from 'shared/constants/entries'
import {
  PATH_RESOLVED_CLIENT,
  PATH_RESOLVED_CLIENT_MANIFEST,
  PATH_RESOLVED_INDEX_HTML,
} from 'shared/constants/paths'
import { InternalServerException } from 'shared/exceptions'
import { HttpClientImpl } from 'shared/http/types'
import { RenderTemplate } from 'shared/typings/renderTemplate'
import { SERVER_SIDE_PROPS, ServerSideProps } from 'shared/utils/serverSideProps'
import { AssetCollectorService } from '../assetCollector'
import { ClientConfigService } from '../clientConfig'
import { HttpClientService } from '../httpClient'

interface WriteTemplateOptions {
  app: JSX.Element
  assets: string
  clientConfig: ClientConfig
  html: string
  res: Response
  serverSideProps: ServerSideProps
  statusCode?: number
}

@Injectable()
export class RenderService {
  protected indexHtml = ''
  protected readonly logger = new Logger()

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

  protected writeTemplate({
    app,
    assets,
    clientConfig = {},
    html,
    res,
    serverSideProps = {},
    statusCode = 200,
  }: WriteTemplateOptions): void {
    const { logger } = this
    let didError = false

    const stream = renderToPipeableStream(app, {
      onShellReady() {
        res.statusCode = didError ? 500 : statusCode
        res.setHeader('Content-type', 'text/html')

        //  Initial data

        const initialData =
          `<script id="${CLIENT_CONFIG}" type="application/json">${JSON.stringify(
            clientConfig,
          )}</script>` +
          `<script id="${SERVER_SIDE_PROPS}" type="application/json">${JSON.stringify(
            serverSideProps,
          )}</script>`

        // Inject assets

        html = html.replace(HtmlMarks.ASSETS, `${HtmlMarks.ASSETS}${initialData}${assets}`)

        //  Writing

        const batches = html.split(HtmlMarks.SSR_OUTLET)

        res.write(batches[0])
        stream.pipe(res)
      },
      onShellError(error) {
        res.statusCode = 500
        res.send(`${PATH_RESOLVED_CLIENT}/${HtmlEntries.MAIN}.html`)
        logger.error(new InternalServerException(error, 'WriteTemplate shell error'))
      },
      onError(error) {
        didError = true
        logger.error(new InternalServerException(error, 'WriteTemplate fatal error'))
      },
    })
  }

  protected async fetchPageProps(
    url: string,
    httpClient: HttpClientImpl,
  ): Promise<ServerSideProps> {
    const { getServerSideProps } = CONFIG_SSR_ROUTES[url] ?? {}

    return getServerSideProps?.(httpClient) ?? {}
  }

  /**
   * Production render function.
   */
  renderEntry(statusCode: number, entry: HtmlEntries) {
    return async (req: Request, res: Response): Promise<void> => {
      // Send rerendered emplate

      for (const route in CONFIG_SSG_ROUTES) {
        if (matchPath(route, req.url)) {
          res.sendFile(`${PATH_RESOLVED_CLIENT}/${CONFIG_SSG_ROUTES[route]}.html`)
          return
        }
      }

      // Client config

      const clientConfig = this.clientConfig.create(req)

      // Render client

      const { entryPath, modulePath } = CONFIG_ENTRIES[entry]

      const [serverSideProps, { renderTemplate }] = await Promise.all([
        this.fetchPageProps(req.url, this.httpClient),
        (await require(entryPath)) as {
          renderTemplate: RenderTemplate
        },
      ])

      const app = renderTemplate({ url: req.url, clientConfig, serverSideProps })

      // Collect assets

      const assets = this.assetCollector.collectByManifest(modulePath)

      // Write

      this.writeTemplate({
        app,
        assets,
        clientConfig,
        html: this.indexHtml,
        res,
        serverSideProps,
        statusCode,
      })
    }
  }
}
