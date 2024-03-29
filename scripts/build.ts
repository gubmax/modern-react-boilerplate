import { build } from 'esbuild'
import { cyan, dim, green } from 'picocolors'

import clientPackage from 'client/package.json'
import serverPackage from 'server/package.json'
import { PATH_RESOLVED_SERVER, PATH_SERVER } from 'shared/constants/paths'
import commonPackage from '../package.json'

const ENTRY_MAIN = 'packages/server/src/main.ts'
const OUTFILE_NAME = 'index.js'

const getExternal = (
  packages: Record<string, boolean | string | string[] | Record<string, unknown>>,
): string[] => {
  return Object.keys(packages).reduce<string[]>((acc, key) => {
    if (key.includes('ependencies')) {
      acc.push(...Object.keys(packages[key]))
    }

    return acc
  }, [])
}

console.log(`${cyan('esbuild')} ${green('building server for production...')}`)

build({
  platform: 'node',
  target: 'node16',
  bundle: true,
  sourcemap: false,
  external: [
    ...getExternal(commonPackage),
    ...getExternal(serverPackage),
    ...getExternal(clientPackage),
  ],
  entryPoints: [ENTRY_MAIN],
  outfile: `${PATH_RESOLVED_SERVER}/${OUTFILE_NAME}`,
  format: 'cjs',
  tsconfig: './tsconfig.json',
})
  .then(() => {
    console.log('outfile')
    console.log(dim(`  ${PATH_SERVER}/${OUTFILE_NAME}`))
  })
  .catch(() => process.exit())
