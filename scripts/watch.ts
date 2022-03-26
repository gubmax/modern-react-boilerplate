import { spawn } from 'child_process'
import { yellow } from 'chalk'
import watcher from '@parcel/watcher'

import {
  PATH_RESOLVED_CLIENT,
  PATH_RESOLVED_SERVER,
  PATH_RESOLVED_SHARED,
} from 'shared/constants/paths'
import serverPackage from 'server/package.json'

const DIRECTORIES = [PATH_RESOLVED_SERVER, PATH_RESOLVED_SHARED]
const OPTIONS = {
  ignore: [
    `${PATH_RESOLVED_CLIENT}/node_modules/.vite`,
    `${PATH_RESOLVED_SERVER}/node_modules/.vite`,
  ],
}

function runScript() {
  return spawn(`cd packages/server && ${serverPackage.scripts.dev}`, {
    stdio: 'inherit',
    shell: true,
  })
}

function callback() {
  console.log(yellow('Restarting server...'))
  server.kill()
  server = runScript()
}

let server = runScript()

for (const dir of DIRECTORIES) {
  void watcher.subscribe(dir, callback, OPTIONS)
}

for (const sig of ['SIGINT', 'SIGTERM']) {
  process.on(sig, () => {
    server.kill()
    process.exit()
  })
}
