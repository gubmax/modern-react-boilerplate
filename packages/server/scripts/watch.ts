import { spawn } from 'child_process'
import { yellow } from 'chalk'
import watcher from '@parcel/watcher'

import {
  PATH_RESOLVED_PACKAGES,
  PATH_RESOLVED_SERVER,
  PATH_RESOLVED_SHARED,
} from 'shared/constants/paths'

const DIRECTORIES = [PATH_RESOLVED_SERVER, PATH_RESOLVED_SHARED]
const OPTIONS = {
  ignore: [
    'scripts',
    `${PATH_RESOLVED_PACKAGES}/client/node_modules/.vite`,
    `${PATH_RESOLVED_PACKAGES}/server/node_modules/.vite`,
  ],
}

function runScript() {
  return spawn('node -r esbuild-register src/main', { stdio: 'inherit', shell: true })
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
