/**
 * Pre-render the app into static HTML.
 */
import { readFileSync, writeFileSync } from 'fs'
import { renderToString } from 'react-dom/server'
import { cyan, dim, green } from 'chalk'
import { Manifest } from 'vite'

import { CONFIG_SSG_ROUTES } from 'server/config'
import { renderClient as RenderClient } from 'server/renderClient'
import {
  PATH_RESOLVED_DIST_RENDER,
  PATH_RESOLVED_DIST_INDEX_HTML,
  PATH_RESOLVED_DIST_CLIENT,
  PATH_DIST_CLIENT,
  PATH_DIST_MANIFEST,
  HtmlMarks,
  PATH_CLIENT_MAIN_MODULE,
} from 'server/common/constants'
import { AssetsInjector } from 'server/modules/render/utils'

process.env.NODE_ENV = 'production'

void (async () => {
  const baseHtml = readFileSync(PATH_RESOLVED_DIST_INDEX_HTML, 'utf-8')

  const renderModulePath = PATH_RESOLVED_DIST_RENDER
  const { renderClient } = (await import(renderModulePath)) as {
    renderClient: typeof RenderClient
  }

  const distManifestPath = PATH_DIST_MANIFEST
  const manifest = (await import(distManifestPath)) as Manifest

  const assetsInjector = new AssetsInjector({ manifest, mark: HtmlMarks.ASSETS })

  // Pre-render each route...
  console.log(cyan('pre-rendered:'))
  for (const route in CONFIG_SSG_ROUTES) {
    // Render

    const app = renderClient(route)
    const ssrOutlet = renderToString(app)

    let html = baseHtml.replace(HtmlMarks.SSR_OUTLER, ssrOutlet)

    // Inject assets

    html = assetsInjector.injectByModulePaths(html, [PATH_CLIENT_MAIN_MODULE])

    // Write

    const fileName = `${CONFIG_SSG_ROUTES[route]}.html`
    const filePath = `${PATH_RESOLVED_DIST_CLIENT}/${fileName}`

    writeFileSync(filePath, html)

    console.log(`${dim(`${PATH_DIST_CLIENT}/`)}${green(fileName)}`)
  }
})()
