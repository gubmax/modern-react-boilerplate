import { Injectable } from '@nestjs/common'
import { ModuleNode } from 'vite'

import { AssetCollectorService, PreloadUrl } from './assetCollector.service'

@Injectable()
export class DevelopmentAssetCollectorService extends AssetCollectorService {
  protected isJsLink = (url: string) => /.*\.(js|ts|tsx)$/.test(url)

  private collectCss(
    mod: ModuleNode | undefined,
    preloadUrls: Set<PreloadUrl>,
    visitedModules: Set<string>,
  ): void {
    if (!mod?.url || visitedModules.has(mod.url)) return

    visitedModules.add(mod.url)

    if (this.isCssLink(mod.url)) {
      preloadUrls.add({ url: mod.url })
    }

    mod.importedModules.forEach((dep) => {
      this.collectCss(dep, preloadUrls, visitedModules)
    })
  }

  injectByModule(html: string, mod?: ModuleNode): string {
    const preloadUrls = new Set<PreloadUrl>()
    const visitedModules = new Set<string>()

    this.collectCss(mod, preloadUrls, visitedModules)
    return this.inject(html, preloadUrls)
  }
}
