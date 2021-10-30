import { Manifest } from 'vite'

import { HtmlMarks, PATH_CLIENT_MAIN_MODULE } from 'server/common/constants'

export interface AssetsInjectorArg {
  manifest: Manifest
  mark: HtmlMarks
}

export class AssetsInjector {
  readonly #manifest: Manifest = {}
  readonly #mark: string

  constructor({ manifest, mark }: AssetsInjectorArg) {
    this.#manifest = manifest
    this.#mark = mark
  }

  protected collect(
    modulePath: string,
    preloadUrls: Set<string>,
    visitedModules: Set<string>,
  ): void {
    if (visitedModules.has(modulePath)) return

    visitedModules.add(modulePath)

    const { file, imports = [], css } = this.#manifest[modulePath]

    if (file) {
      preloadUrls.add(`/${file}`)
    }

    if (css?.length) {
      css.forEach((url) => preloadUrls.add(`/${url}`))
    }

    for (const assetPath of imports) {
      this.collect(assetPath, preloadUrls, visitedModules)
    }
  }

  protected isCssLink = (url: string) => url.endsWith('.css')
  protected isJsLink = (url: string) => url.endsWith('.js')
  protected isJsScript = (url: string) =>
    url === `/${this.#manifest[PATH_CLIENT_MAIN_MODULE]?.file}`

  protected inject(html: string, preloadUrls: Set<string>): string {
    let tags = ''

    preloadUrls.forEach((url) => {
      if (this.isCssLink(url)) {
        tags += `<link rel="stylesheet" href="${url}">`
      } else if (this.isJsScript(url)) {
        tags += `<script type="module" crossorigin src="${url}"></script>`
      } else if (this.isJsLink(url)) {
        tags += `<link rel="modulepreload" as="script" crossorigin href="${url}">`
      }
    })

    return tags ? html.replace(this.#mark, `${this.#mark}${tags}`) : html
  }

  injectUrls(html: string, preloadUrls: string[]): string {
    return this.inject(html, new Set(preloadUrls))
  }

  injectByModulePaths(html: string, modulePaths: string[]): string {
    const preloadUrls = new Set<string>()
    const visitedModules = new Set<string>()

    for (const path of modulePaths) {
      this.collect(path, preloadUrls, visitedModules)
    }

    return this.inject(html, preloadUrls)
  }
}
