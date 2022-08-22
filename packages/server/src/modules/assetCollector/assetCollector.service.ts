import { Injectable } from '@nestjs/common'
import { Manifest } from 'vite'

import { InternalServerException } from 'shared/exceptions'

export interface PreloadUrl {
  url: string
  isEntry?: boolean
}

@Injectable()
export class AssetCollectorService {
  #manifest?: Manifest

  set manifest(val: Manifest) {
    this.#manifest = val
  }

  protected isCssLink = (url: string) => url.endsWith('.css')
  protected isJsLink = (url: string) => url.endsWith('.js')

  protected joinTags(preloadUrls: Set<PreloadUrl>): string {
    let tags = ''

    for (const { url, isEntry } of preloadUrls) {
      if (this.isCssLink(url)) {
        tags += `<link rel="stylesheet" href="${url}">`
      } else if (this.isJsLink(url)) {
        tags += isEntry
          ? `<script type="module" crossorigin src="${url}"></script>`
          : `<link rel="modulepreload" as="script" crossorigin href="${url}">`
      }
    }

    return tags
  }

  protected collectAssets(
    modulePath: string,
    preloadUrls: Set<PreloadUrl>,
    visitedModules: Set<string>,
  ): void {
    if (visitedModules.has(modulePath)) return

    visitedModules.add(modulePath)

    const { file, imports = [], css, isEntry } = this.#manifest?.[modulePath] ?? {}

    if (file) {
      preloadUrls.add({ url: `/${file}`, isEntry })
    }

    if (css?.length) {
      css.forEach((url) => preloadUrls.add({ url: `/${url}` }))
    }

    for (const assetPath of imports) {
      this.collectAssets(assetPath, preloadUrls, visitedModules)
    }
  }

  collectByManifest(...modulePaths: string[]): string {
    if (!this.#manifest) {
      throw new InternalServerException('Assets Collector manifest has not been setted')
    }

    const preloadUrls = new Set<PreloadUrl>()
    const visitedModules = new Set<string>()

    for (const path of modulePaths) {
      this.collectAssets(path, preloadUrls, visitedModules)
    }

    return this.joinTags(preloadUrls)
  }
}
