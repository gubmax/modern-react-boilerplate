/**
 * Pre-render the app into static HTML.
 */
import { readFileSync, writeFileSync } from 'node:fs'

import { renderToString } from 'react-dom/server'
import { cyan, dim, green } from 'picocolors'
import { Manifest } from 'vite'

import { CONFIG_ENTRIES, CONFIG_SSG_ROUTES } from 'server/config'
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

const prerenderedHtml: string[] = []

const logInfo = (fileName: string) => console.log(`  ${dim(`${PATH_CLIENT}/`)}${green(fileName)}`)

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

  let html = indexHtml.replace(HtmlMarks.SSR_OUTLET, ssrOutlet)
  html = assetCollector.injectByModulePaths(html, [modulePath])

  writeFileSync(`${PATH_RESOLVED_CLIENT}/${fileName}`, html)

  prerenderedHtml.push(fileName)
}

async function renderMainEntry(indexHtml: string, assetCollector: AssetCollectorService) {
  console.log(HtmlEntries.MAIN)

  const { entryPath, modulePath } = CONFIG_ENTRIES[HtmlEntries.MAIN]

  const { renderTemplate } = (await require(entryPath)) as {
    renderTemplate: RenderTemplate
  }

  // Pre-render each route...
  for (const route in CONFIG_SSG_ROUTES) {
    const app = renderTemplate({ url: route })
    const fileName = `${CONFIG_SSG_ROUTES[route]}.html`

    writeEntry({ app, indexHtml, assetCollector, modulePath, fileName })
    logInfo(fileName)
  }
}

async function renderBaseEntry(
  entry: HtmlEntries,
  indexHtml: string,
  assetCollector: AssetCollectorService,
) {
  console.log(entry)

  const { entryPath, modulePath } = CONFIG_ENTRIES[entry]

  const { renderTemplate } = (await require(entryPath)) as {
    renderTemplate: RenderTemplate
  }

  const app = renderTemplate()
  const fileName = `${entry}.html`

  writeEntry({ app, indexHtml, assetCollector, modulePath, fileName })
  logInfo(fileName)
}

void (async () => {
  const indexHtml = readFileSync(PATH_RESOLVED_INDEX_HTML, 'utf-8')
  const manifest = JSON.parse(
    readFileSync(`${PATH_RESOLVED_BUILD}/${PATH_CLIENT}/manifest.json`, 'utf-8'),
  ) as Manifest

  const assetCollector = new AssetCollectorService()
  assetCollector.manifest = manifest

  console.log(`${cyan('pre-render script')} ${green('generating HTML files...')}`)

  await renderMainEntry(indexHtml, assetCollector)
  await renderBaseEntry(HtmlEntries.INTERNAL_ERROR, indexHtml, assetCollector)
  await renderBaseEntry(HtmlEntries.NOT_FOUND, indexHtml, assetCollector)
  await renderBaseEntry(HtmlEntries.SIGN_IN, indexHtml, assetCollector)
  await renderBaseEntry(HtmlEntries.SIGN_UP, indexHtml, assetCollector)

  console.log(`\n${cyan('critical')} ${green('inlining critical CSS to HTML...')}`)

  for await (const src of prerenderedHtml) {
    logInfo(src)
    await generateCriticalCss(src)
  }
})()
