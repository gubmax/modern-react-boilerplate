import { resolve } from 'path'
import { realpathSync } from 'fs'

const appDirectory = realpathSync(process.cwd())

export function resolveApp(relativePath: string): string {
  return resolve(appDirectory, relativePath)
}

export const PATH_DIST_CLIENT = 'dist/client'
export const PATH_DIST_SERVER = 'dist/server'
export const PATH_DIST_INDEX_HTML = `${PATH_DIST_CLIENT}/index.html`
export const PATH_INDEX_HTML = 'index.html'
export const PATH_DIST_RENDER = `${PATH_DIST_SERVER}/renderClient`
export const PATH_RENDER = 'server/renderClient'
export const PATH_CLIENT_APP_MODULE = 'src/components/layout/App/index.ts'

export const PATH_RESOLVED_DIST_CLIENT = resolveApp(PATH_DIST_CLIENT)
export const PATH_RESOLVED_SERVER = resolveApp(PATH_DIST_SERVER)
export const PATH_RESOLVED_DIST_INDEX_HTML = resolveApp(PATH_DIST_INDEX_HTML)
export const PATH_RESOLVED_DEV_INDEX_HTML = resolveApp(PATH_INDEX_HTML)
export const PATH_RESOLVED_DIST_RENDER = resolveApp(PATH_DIST_RENDER)
export const PATH_RESOLVED_DEV_RENDER = resolveApp(PATH_RENDER)
export const PATH_RESOLVED_CLIENT_APP_MODULE = resolveApp(PATH_CLIENT_APP_MODULE)
