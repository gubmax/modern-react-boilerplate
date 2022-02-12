/**
 * Pre-render the app into static HTML.
 */
import { readFileSync, writeFileSync } from 'fs'
import { renderToString } from 'react-dom/server'
import { cyan, dim, green } from 'chalk'
import { Manifest } from 'vite'

import { CONFIG_ENTRIES, CONFIG_SSG_ROUTES } from 'server/config'
import {
  PATH_RESOLVED_DIST_INDEX_HTML,
  PATH_RESOLVED_DIST_CLIENT,
  PATH_RESOLVED_DIST_MANIFEST,
  PATH_DIST_CLIENT,
} from 'shared/constants/paths'
import { HtmlEntries, HtmlMarks } from 'server/src/common/constants/html'
import { AssetCollectorService } from 'server/src/modules/assetCollector'
import { renderServerMainTemplate as RenderServerMainTemplate } from 'client/src/entries/main.server.entry'
import { renderInternalErrorTemplate as RenderInternalErrorTemplate } from 'client/src/entries/internalError.entry'

process.env.NODE_ENV = 'production'
process.env.PATHS = 'local'

const logInfo = (fileName: string) =>
  console.log(`    ${dim(`${PATH_DIST_CLIENT}/`)}${green(fileName)}`)

function writeEntry({
  app,
  indexHtml,
  assetCollector,
  modulePath,
  fileName,
}: {
  app: JSX.Element
  indexHtml: string
  assetCollector: AssetCollectorService
  modulePath: string
  fileName: string
}) {
  const ssrOutlet = renderToString(app)

  let html = indexHtml.replace(HtmlMarks.SSR_OUTLER, ssrOutlet)
  html = assetCollector.injectByModulePaths(html, [modulePath])

  writeFileSync(`${PATH_RESOLVED_DIST_CLIENT}/${fileName}`, html)
}

async function renderMainEntry(indexHtml: string, assetCollector: AssetCollectorService) {
  console.log(`  ${HtmlEntries.MAIN}`)

  const { entryPath, modulePath } = CONFIG_ENTRIES[HtmlEntries.MAIN]

  const { renderServerMainTemplate } = (await require(entryPath)) as {
    renderServerMainTemplate: typeof RenderServerMainTemplate
  }

  // Pre-render each route...
  for (const route in CONFIG_SSG_ROUTES) {
    const app = renderServerMainTemplate(route)
    const fileName = `${CONFIG_SSG_ROUTES[route]}.html`

    writeEntry({ app, indexHtml, assetCollector, modulePath, fileName })
    logInfo(fileName)
  }
}

async function renderInternalErrorEntry(indexHtml: string, assetCollector: AssetCollectorService) {
  console.log(`  ${HtmlEntries.INTERNAL_ERROR}`)

  const { entryPath, modulePath } = CONFIG_ENTRIES[HtmlEntries.INTERNAL_ERROR]

  const { renderInternalErrorTemplate } = (await require(entryPath)) as {
    renderInternalErrorTemplate: typeof RenderInternalErrorTemplate
  }

  const app = renderInternalErrorTemplate()
  const fileName = `${HtmlEntries.INTERNAL_ERROR}.html`

  writeEntry({ app, indexHtml, assetCollector, modulePath, fileName })
  logInfo(fileName)
}

void (async () => {
  const indexHtml = readFileSync(PATH_RESOLVED_DIST_INDEX_HTML, 'utf-8')
  const manifest = JSON.parse(readFileSync(PATH_RESOLVED_DIST_MANIFEST, 'utf-8')) as Manifest

  const assetCollector = new AssetCollectorService(manifest)

  console.log(cyan('pre-rendered:'))

  await renderMainEntry(indexHtml, assetCollector)
  await renderInternalErrorEntry(indexHtml, assetCollector)
})()
