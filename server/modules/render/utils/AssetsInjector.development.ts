import { PATH_CLIENT_MAIN_MODULE } from 'server/common/constants'
import { ModuleNode } from 'vite'

import { AssetsInjector, AssetsInjectorArg } from './AssetsInjector'

export class DevelopmentAssetsInjector extends AssetsInjector {
  constructor(options: Omit<AssetsInjectorArg, 'manifest'>) {
    super({ ...options, manifest: {} })
  }

  protected isJsScript = (url: string) => url === PATH_CLIENT_MAIN_MODULE

  private collectCss(
    mod: ModuleNode | undefined,
    preloadUrls: Set<string>,
    visitedModules: Set<string>,
  ): void {
    if (!mod?.url || visitedModules.has(mod.url)) return

    visitedModules.add(mod.url)

    if (this.isCssLink(mod.url)) {
      preloadUrls.add(mod.url)
    }

    mod.importedModules.forEach((dep) => {
      this.collectCss(dep, preloadUrls, visitedModules)
    })
  }

  injectByModule(html: string, mod?: ModuleNode): string {
    const preloadUrls = new Set<string>()
    const visitedModules = new Set<string>()

    this.collectCss(mod, preloadUrls, visitedModules)
    return this.inject(html, preloadUrls)
  }
}
