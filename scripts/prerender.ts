/**
 * Pre-render the app into static HTML.
 */
import assert from 'node:assert'
import { readFileSync, writeFileSync } from 'node:fs'

import { renderToString } from 'react-dom/server'
import { cyan, dim, green } from 'picocolors'
import { Manifest } from 'vite'

import { CONFIG_ENTRIES } from 'server/config'
import { CONFIG_PAGES } from 'server/config/pages.config'
import { HtmlMarks } from 'server/src/common/constants/html'
import { AssetCollectorService } from 'server/src/modules/assetCollector'
import { HtmlEntries } from 'shared/constants/entries'
import {
  PATH_CLIENT,
  PATH_RESOLVED_BUILD,
  PATH_RESOLVED_CLIENT,
  PATH_RESOLVED_INDEX_HTML,
} from 'shared/constants/paths'
import { RenderTemplate } from 'shared/typings/renderTemplate'
import { generateCriticalCss } from './criticalCss'

const manifest = JSON.parse(
  readFileSync(`${PATH_RESOLVED_BUILD}/${PATH_CLIENT}/manifest.json`, 'utf-8'),
) as Manifest

const prerenderedHtml: string[] = []
const assetCollector = new AssetCollectorService()

assetCollector.manifest = manifest

function logInfo(fileName: string) {
  return console.log(`  ${dim(`${PATH_CLIENT}/`)}${green(fileName)}`)
}

async function renderPage({
  url,
  name,
  entryPath,
  modulePath,
  indexHtml,
}: {
  url?: string
  name: string
  entryPath: string
  modulePath: string
  indexHtml: string
}) {
  const { renderTemplate } = (await require(entryPath)) as {
    renderTemplate: RenderTemplate
  }

  // Render

  const app = renderTemplate({ url })
  const ssrOutlet = renderToString(app)

  let html = indexHtml.replace(HtmlMarks.SSR_OUTLET, ssrOutlet)
  const assets = assetCollector.collectByManifest(modulePath)
  html = html.replace(HtmlMarks.ASSETS, `${HtmlMarks.ASSETS}${assets}`)

  // Write template

  const fileName = `${name}.html`

  writeFileSync(`${PATH_RESOLVED_CLIENT}/${fileName}`, html)

  prerenderedHtml.push(fileName)

  logInfo(fileName)
}

void (async () => {
  const indexHtml = readFileSync(PATH_RESOLVED_INDEX_HTML, 'utf-8')

  console.log(`${cyan('pre-render script')} ${green('generating HTML files...')}`)

  // Pre-render app routes

  for (const url in CONFIG_PAGES) {
    const pageConfig = CONFIG_PAGES[url]

    assert(pageConfig, `Config for url "${url}" not found`)

    const { name, entry } = pageConfig
    const { entryPath, modulePath } = CONFIG_ENTRIES[entry]

    await renderPage({ url, name, entryPath, modulePath, indexHtml })
  }

  // Pre-render specific routes

  const { entryPath: notFoundEntry, modulePath: notFoundModule } =
    CONFIG_ENTRIES[HtmlEntries.NOT_FOUND]
  await renderPage({
    name: HtmlEntries.NOT_FOUND,
    entryPath: notFoundEntry,
    modulePath: notFoundModule,
    indexHtml,
  })

  const { entryPath: internalErrorEntry, modulePath: internalErrorModule } =
    CONFIG_ENTRIES[HtmlEntries.INTERNAL_ERROR]
  await renderPage({
    name: HtmlEntries.INTERNAL_ERROR,
    entryPath: internalErrorEntry,
    modulePath: internalErrorModule,
    indexHtml,
  })

  // Critical

  console.log(`\n${cyan('critical')} ${green('inlining critical CSS to HTML...')}`)

  for await (const src of prerenderedHtml) {
    logInfo(src)
    await generateCriticalCss(src)
  }
})()
