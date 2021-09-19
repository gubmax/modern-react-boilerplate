/**
 * Pre-render the app into static HTML.
 */
import { readFileSync, writeFileSync } from 'fs'
import { renderToString } from 'react-dom/server'
import { cyan, dim, green } from 'chalk'

import { CONFIG_SSG_ROUTES } from 'server/config'
import { renderClient as RenderClient } from 'server/renderClient'
import {
  PATH_RESOLVED_DIST_RENDER,
  PATH_RESOLVED_DIST_INDEX_HTML,
  PATH_RESOLVED_DIST_CLIENT,
  PATH_DIST_CLIENT,
} from 'server/common/constants'

void (async () => {
  const template = readFileSync(PATH_RESOLVED_DIST_INDEX_HTML, 'utf-8')

  const { renderClient } = (await import(PATH_RESOLVED_DIST_RENDER)) as {
    renderClient: typeof RenderClient
  }

  // Pre-render each route...
  console.log(cyan('pre-rendered:'))
  for (const route in CONFIG_SSG_ROUTES) {
    const app = renderClient(route)
    const appHtml = renderToString(app)

    const html = template.replace('<!--root-html-->', appHtml)

    const fileName = `${CONFIG_SSG_ROUTES[route]}.html`
    const filePath = `${PATH_RESOLVED_DIST_CLIENT}/${fileName}`

    writeFileSync(filePath, html)

    console.log(`${dim(`${PATH_DIST_CLIENT}/`)}${green(fileName)}`)
  }
})()
