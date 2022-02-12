import { build } from 'esbuild'
import { cyan, dim, green } from 'chalk'

import { PATH_DIST_SERVER, PATH_RESOLVED_DIST_SERVER } from '../../shared/constants/paths'
import serverPackage from '../package.json'
import clientPackage from '../../client/package.json'

process.env.NODE_ENV = 'production'

const OUTFILE_NAME = 'index.js'

const getExternal = (packages: Record<string, string | Record<string, string>>): string[] => {
  return Object.keys(packages).reduce<string[]>((acc, key) => {
    if (key.includes('ependencies')) {
      acc.push(...Object.keys(packages[key]))
    }

    return acc
  }, [])
}

console.log(`${cyan('esbuild')} ${green('building for production...')}`)

build({
  platform: 'node',
  target: 'node16',
  bundle: true,
  sourcemap: false,
  external: [...getExternal(serverPackage), ...getExternal(clientPackage)],
  entryPoints: ['./src/main.ts'],
  outfile: `${PATH_RESOLVED_DIST_SERVER}/${OUTFILE_NAME}`,
  format: 'cjs',
  tsconfig: './tsconfig.json',
})
  .then(() => {
    console.log('outfile')
    console.log(dim(`  ${PATH_DIST_SERVER}/${OUTFILE_NAME}`))
  })
  .catch(() => process.exit())
