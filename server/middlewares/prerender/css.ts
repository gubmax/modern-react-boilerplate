import { ModuleNode } from 'vite'

import type { PreloadUrls } from './types'

export function collectCss(
  mod: ModuleNode | undefined,
  preloadUrls: PreloadUrls,
  visitedModules: Set<string>,
): void {
  if (!mod?.url || visitedModules.has(mod.url)) return

  visitedModules.add(mod.url)

  if (mod.url.endsWith('.css')) {
    preloadUrls.css.add(mod.url)
  }

  mod.importedModules.forEach((dep) => {
    collectCss(dep, preloadUrls, visitedModules)
  })
}

export function injectCss(template: string, preloadUrls: PreloadUrls): string {
  let css = ''

  preloadUrls.css.forEach((url) => {
    css += `<link rel="stylesheet" href="${url}" type="text/css">`
  })

  if (!css) return template

  const searchValue = '<!--external-resources-->'
  return template.replace(searchValue, `${searchValue}${css}`)
}
