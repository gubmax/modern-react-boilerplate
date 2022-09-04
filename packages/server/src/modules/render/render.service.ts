import assert from 'node:assert'
import { createReadStream, readFileSync } from 'node:fs'

import { renderToPipeableStream } from 'react-dom/server'
import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import type { Request, Response } from 'express'
import { Manifest } from 'vite'

import { CONFIG_ENTRIES } from 'server/config'
import { CONFIG_PAGES } from 'server/config/pages.config'
import { HtmlMarks } from 'server/src/common/constants/html'
import { CLIENT_CONFIG, ClientConfig } from 'shared/constants/clientConfig'
import { HtmlEntries } from 'shared/constants/entries'
import { PATH_RESOLVED_CLIENT, PATH_RESOLVED_CLIENT_MANIFEST } from 'shared/constants/paths'
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
  req: Request
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

  async init(): Promise<void> {
    const manifest = JSON.parse(readFileSync(PATH_RESOLVED_CLIENT_MANIFEST, 'utf-8')) as Manifest

    this.assetCollector.manifest = manifest
    this.indexHtml = await this.readHtmlFile(`${PATH_RESOLVED_CLIENT}/index.html`)
  }

  protected writeTemplate({
    app,
    assets,
    clientConfig = {},
    html,
    req,
    res,
    serverSideProps = {},
    statusCode = 200,
  }: WriteTemplateOptions): void {
    const { logger } = this
    let didError = false
    const renderErrorTemplate = () => this.renderInternalErrorEntry(req, res)

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
        logger.error(new InternalServerException(error, 'WriteTemplate shell error'))
        res.statusCode = 500
        renderErrorTemplate()
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
    const { getServerSideProps } = CONFIG_PAGES[url] ?? {}

    return getServerSideProps?.(httpClient) ?? {}
  }

  protected readHtmlFile(filePath: string): Promise<string> {
    return new Promise((resolve) => {
      let data = ''

      createReadStream(filePath, { encoding: 'utf-8' })
        .on('data', (chunk: string) => (data += chunk))
        .on('end', () => resolve(data))
        .on('error', (error) => {
          throw new InternalServerException(
            error,
            `An error occured while reading file "${filePath}"`,
          )
        })
    })
  }

  /**
   * Production render function.
   */
  renderEntry(statusCode: number) {
    return async (req: Request, res: Response): Promise<void> => {
      // Send prerendered template

      const config = CONFIG_PAGES[req.url]

      assert(config, `Config for url "${req.url}" not found`)

      if (!config.getServerSideProps) {
        return res.sendFile(`${PATH_RESOLVED_CLIENT}/${config.name}.html`)
      }

      // Client config

      const clientConfig = this.clientConfig.create(req)

      // Render client

      const { entryPath, modulePath } = CONFIG_ENTRIES[config.entry]

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
        req,
        res,
        serverSideProps,
        statusCode,
      })
    }
  }

  renderNotFoundEntry(req: Request, res: Response): void {
    res.statusCode = 404
    res.sendFile(`${PATH_RESOLVED_CLIENT}/${HtmlEntries.NOT_FOUND}.html`)
  }

  renderInternalErrorEntry(req: Request, res: Response): void {
    res.statusCode = 500
    res.sendFile(`${PATH_RESOLVED_CLIENT}/${HtmlEntries.INTERNAL_ERROR}.html`)
  }
}
