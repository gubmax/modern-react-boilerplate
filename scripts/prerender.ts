/**
 * Pre-render the app into static HTML.
 */
import { readFileSync, writeFileSync } from 'fs'
import { renderToString } from 'react-dom/server'
import { cyan, dim, green } from 'chalk'

import { CONFIG_STATIC_ROUTES } from 'server/config'
import { resolveApp } from 'server/helpers'
import { renderClient as RenderClient } from 'server/renderClient'

const PATH_CLIENT = 'dist/client'
const PATH_INDEX_HTML = resolveApp('dist/client/index.html')
const PATH_PROD_RENDER = resolveApp('dist/server/renderClient')

void (async () => {
  const template = readFileSync(PATH_INDEX_HTML, 'utf-8')

  const { renderClient } = (await import(PATH_PROD_RENDER)) as {
    renderClient: typeof RenderClient
  }

  // Pre-render each route...
  console.log(cyan('pre-rendered:'))
  for (const route in CONFIG_STATIC_ROUTES) {
    const app = renderClient(route)
    const appHtml = renderToString(app)

    const html = template.replace('<!--root-html-->', appHtml)

    const fileName = `${CONFIG_STATIC_ROUTES[route]}.html`
    const filePath = `${resolveApp(PATH_CLIENT)}/${fileName}`

    writeFileSync(resolveApp(filePath), html)

    console.log(`${dim(`${PATH_CLIENT}/`)}${green(fileName)}`)
  }
})()
