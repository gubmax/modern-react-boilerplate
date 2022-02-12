import { resolve } from 'path'
import { realpathSync } from 'fs'
import { cwd } from 'process'

const WORKING_DIRECTORY = cwd()

const ABSOLUTE_PATH =
  process.env.NODE_ENV === 'production' && process.env.PATHS !== 'local'
    ? WORKING_DIRECTORY
    : realpathSync(`${WORKING_DIRECTORY}/../../`)

export function resolvePath(relativePath: string): string {
  return resolve(ABSOLUTE_PATH, relativePath)
}

// Relative paths

export const PATH_DIST_CLIENT = 'dist/client'
export const PATH_DIST_SERVER = 'dist/server'
export const PATH_DIST_INDEX_HTML = `${PATH_DIST_CLIENT}/index.html`
export const PATH_DIST_MANIFEST = `${PATH_DIST_CLIENT}/manifest.json`

export const PATH_CLIENT = 'packages/client'
export const PATH_PUBLIC = 'packages/client/public'
export const PATH_SERVER = 'packages/server'
export const PATH_SHARED = 'packages/shared'
export const PATH_INDEX_HTML = `${PATH_PUBLIC}/index.html`
export const PATH_CLIENT_PAGES = `${PATH_CLIENT}/src/components/pages`

// Absolute paths

export const PATH_RESOLVED_PACKAGES = resolvePath('packages')
export const PATH_RESOLVED_DIST_CLIENT = resolvePath(PATH_DIST_CLIENT)
export const PATH_RESOLVED_DIST_SERVER = resolvePath(PATH_DIST_SERVER)
export const PATH_RESOLVED_DIST_INDEX_HTML = resolvePath(PATH_DIST_INDEX_HTML)
export const PATH_RESOLVED_DIST_MANIFEST = resolvePath(PATH_DIST_MANIFEST)

export const PATH_RESOLVED_CLIENT = resolvePath(PATH_CLIENT)
export const PATH_RESOLVED_SERVER = resolvePath(PATH_SERVER)
export const PATH_RESOLVED_SHARED = resolvePath(PATH_SHARED)
export const PATH_RESOLVED_DEV_INDEX_HTML = resolvePath(PATH_INDEX_HTML)
export const PATH_RESOLVED_CLIENT_PAGES = resolvePath(PATH_CLIENT_PAGES)
