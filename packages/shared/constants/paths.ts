import { resolve } from 'node:path'

export const PATH_RESOLVED_PROD = resolve(`${__dirname}/../../dist`)
export const PATH_RESOLVED_BUILD = resolve(`${__dirname}/../../../dist`)
export const PATH_RESOLVED_LOCAL = resolve(`${__dirname}/../../`)

const ENV_PROD = process.env.NODE_ENV === 'production'
const ENV_BUILD = process.env.PATHS === 'build'

let PATH_ROOT: string
if (ENV_BUILD) PATH_ROOT = PATH_RESOLVED_BUILD
else if (ENV_PROD) PATH_ROOT = PATH_RESOLVED_PROD
else PATH_ROOT = PATH_RESOLVED_LOCAL

export const PATH_CLIENT = 'client'
export const PATH_CLIENT_MANIFEST = `${PATH_CLIENT}/manifest.json`
export const PATH_PUBLIC = ENV_PROD ? PATH_CLIENT : `${PATH_CLIENT}/public`
export const PATH_INDEX_HTML = `${PATH_PUBLIC}/index.html`
export const PATH_SERVER = 'server'
export const PATH_SHARED = 'shared'
export const PATH_SSR_MANIFEST = `${PATH_CLIENT}/ssr-manifest.json`

function resolveAbsolutePath(relativePath: string): string {
  return resolve(PATH_ROOT, relativePath)
}

export const PATH_RESOLVED_CLIENT = resolveAbsolutePath(PATH_CLIENT)
export const PATH_RESOLVED_CLIENT_MANIFEST = resolveAbsolutePath(PATH_CLIENT_MANIFEST)
export const PATH_RESOLVED_INDEX_HTML = resolveAbsolutePath(PATH_INDEX_HTML)
export const PATH_RESOLVED_PUBLIC = resolveAbsolutePath(PATH_PUBLIC)
export const PATH_RESOLVED_SERVER = resolveAbsolutePath(PATH_SERVER)
export const PATH_RESOLVED_SHARED = resolveAbsolutePath(PATH_SHARED)
export const PATH_RESOLVED_SSR_MANIFEST = resolveAbsolutePath(PATH_SSR_MANIFEST)
