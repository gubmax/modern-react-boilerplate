import { ModuleNode } from 'vite'

import type { PreloadUrls } from '../types'

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
