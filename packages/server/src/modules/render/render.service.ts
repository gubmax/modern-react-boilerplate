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
  statusCode?: number
  html: string
  app: JSX.Element
  res: Response
  clientConfig: ClientConfig
  serverSideProps: ServerSideProps
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

  private sendPreRenderedTemplate(url: string, res: Response): boolean {
    for (const route in CONFIG_SSG_ROUTES) {
      if (matchPath(route, url)) {
        res.sendFile(`${PATH_RESOLVED_CLIENT}/${CONFIG_SSG_ROUTES[route]}.html`)
        return true
      }
    }

    return false
  }

  protected writeTemplate({
    statusCode = 200,
    html,
    app,
    res,
    clientConfig = {},
    serverSideProps = {},
  }: WriteTemplateOptions): void {
    const logger = this.logger

    const stream = renderToPipeableStream(app, {
      onShellReady() {
        res.statusCode = statusCode
        res.setHeader('Content-type', 'text/html')

        //  Initial data
        const initialDataTag =
          `<script id="${CLIENT_CONFIG}" type="application/json"> ${JSON.stringify(
            clientConfig,
          )}</script>` +
          `<script id="${SERVER_SIDE_PROPS}" type="application/json"> ${JSON.stringify(
            serverSideProps,
          )}</script>`

        // Assets
        html = html.replace(HtmlMarks.ASSETS, `${HtmlMarks.ASSETS}${initialDataTag}`)

        //  Writing

        const batches = html.split(HtmlMarks.SSR_OUTLET)

        res.write(batches[0])
        stream.pipe(res)
      },
      onShellError(error) {
        res.statusCode = 500
        res.setHeader('Content-type', 'text/html')
        res.sendFile(`${PATH_RESOLVED_CLIENT}/${HtmlEntries.MAIN}.html`)
        logger.error(
          new InternalServerException(
            'WriteTemplate shell error',
            error instanceof Error ? error.stack : undefined,
          ),
        )
      },
      onError(error) {
        throw new InternalServerException(
          'WriteTemplate fatal error',
          error instanceof Error ? error.stack : undefined,
        )
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
  protected renderBaseEntry(statusCode: number, entry: HtmlEntries) {
    return async (req: Request, res: Response): Promise<void> => {
      const hasBeenSent = this.sendPreRenderedTemplate(req.url, res)
      if (hasBeenSent) return

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

      // Inject assets

      const html = this.assetCollector.injectByModulePaths(this.indexHtml, [modulePath])

      // Write

      this.writeTemplate({ statusCode, html, app, res, clientConfig, serverSideProps })
    }
  }

  async renderMainEntry(req: Request, res: Response): Promise<void> {
    return this.renderBaseEntry(200, HtmlEntries.MAIN)(req, res)
  }

  async renderSignInEntry(req: Request, res: Response): Promise<void> {
    return this.renderBaseEntry(200, HtmlEntries.SIGN_IN)(req, res)
  }

  async renderSignUpEntry(req: Request, res: Response): Promise<void> {
    return this.renderBaseEntry(200, HtmlEntries.SIGN_UP)(req, res)
  }

  async renderInternalErrorEntry(req: Request, res: Response): Promise<void> {
    return this.renderBaseEntry(500, HtmlEntries.INTERNAL_ERROR)(req, res)
  }

  async renderNotFoundEntry(req: Request, res: Response): Promise<void> {
    return this.renderBaseEntry(404, HtmlEntries.NOT_FOUND)(req, res)
  }
}
