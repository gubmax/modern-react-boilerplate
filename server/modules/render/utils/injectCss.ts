import type { PreloadUrls } from '../types'

export function injectCss(template: string, preloadUrls: PreloadUrls): string {
  let css = ''

  preloadUrls.css.forEach((url) => {
    css += `<link rel="stylesheet" href="${url}" type="text/css">`
  })

  if (!css) return template

  const searchValue = '<!--external-resources-->'
  return template.replace(searchValue, `${searchValue}${css}`)
}
