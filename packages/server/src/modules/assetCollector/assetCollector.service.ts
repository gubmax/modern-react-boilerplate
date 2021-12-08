import { Injectable } from '@nestjs/common'
import { Manifest } from 'vite'

import { HtmlMarks } from 'server/src/common/constants'

export type PreloadUrl = { url: string; isEntry?: boolean }

@Injectable()
export class AssetCollectorService {
  #manifest: Manifest
  #mark = HtmlMarks.ASSETS

  constructor(manifest: Manifest = {}) {
    this.#manifest = manifest
  }

  set manifest(val: Manifest) {
    this.#manifest = val
  }

  protected isCssLink = (url: string) => url.endsWith('.css')
  protected isJsLink = (url: string) => url.endsWith('.js')

  protected inject(html: string, preloadUrls: Set<PreloadUrl>): string {
    let tags = ''

    preloadUrls.forEach(({ url, isEntry }) => {
      if (this.isCssLink(url)) {
        tags += `<link rel="stylesheet" href="${url}">`
      } else if (this.isJsLink(url)) {
        tags += isEntry
          ? `<script type="module" crossorigin src="${url}"></script>`
          : `<link rel="modulepreload" as="script" crossorigin href="${url}">`
      }
    })

    return tags ? html.replace(this.#mark, `${this.#mark}${tags}`) : html
  }

  injectUrls(html: string, preloadUrls: PreloadUrl[]): string {
    return this.inject(html, new Set(preloadUrls))
  }

  protected collect(
    modulePath: string,
    preloadUrls: Set<PreloadUrl>,
    visitedModules: Set<string>,
  ): void {
    if (visitedModules.has(modulePath)) return

    visitedModules.add(modulePath)

    const { file, imports = [], css, isEntry } = this.#manifest[modulePath]

    if (file) {
      preloadUrls.add({ url: `/${file}`, isEntry })
    }

    if (css?.length) {
      css.forEach((url) => preloadUrls.add({ url: `/${url}` }))
    }

    for (const assetPath of imports) {
      this.collect(assetPath, preloadUrls, visitedModules)
    }
  }

  injectByModulePaths(html: string, modulePaths: string[]): string {
    const preloadUrls = new Set<PreloadUrl>()
    const visitedModules = new Set<string>()

    for (const path of modulePaths) {
      this.collect(path, preloadUrls, visitedModules)
    }

    return this.inject(html, preloadUrls)
  }
}
