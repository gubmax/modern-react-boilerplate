import { readFileSync } from 'fs'
import { Injectable } from '@nestjs/common'
import type { Request, Response } from 'express'
import { matchPath } from 'react-router'

import type { renderClient as RenderClient } from 'server/renderClient'
import { CONFIG_SSG_ROUTES } from 'server/config'
import { fetchPageProps, writeTemplate } from './utils'
import {
  PATH_RESOLVED_DIST_RENDER,
  PATH_RESOLVED_DIST_INDEX_HTML,
  PATH_RESOLVED_DIST_CLIENT,
} from 'server/common/constants'

@Injectable()
export class RenderService {
  template = readFileSync(PATH_RESOLVED_DIST_INDEX_HTML, 'utf-8')

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

    const renderModulePath = PATH_RESOLVED_DIST_RENDER
    const [serverSideProps, { renderClient }] = await Promise.all([
      fetchPageProps(req.url),
      import(renderModulePath) as Promise<{ renderClient: typeof RenderClient }>,
    ])

    const appHtml = renderClient(req.url, serverSideProps)

    writeTemplate(this.template, appHtml, res, serverSideProps)
  }
}
