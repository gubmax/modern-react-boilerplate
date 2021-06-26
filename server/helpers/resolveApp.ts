import { resolve } from 'path'
import { realpathSync } from 'fs'

const appDirectory = realpathSync(process.cwd())

export function resolveApp(relativePath: string): string {
  return resolve(appDirectory, relativePath)
}
