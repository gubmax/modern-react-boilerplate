import { watch } from 'chokidar'

import { PATH_RESOLVED_SERVER, PATH_RESOLVED_SHARED } from 'shared/constants/paths'

const WATCH_PATHS = [PATH_RESOLVED_SERVER, PATH_RESOLVED_SHARED]
const WATCH_OPTIONS = { ignored: '*/node_modules/.vite' }
const SERVER_ENTRY = `${PATH_RESOLVED_SERVER}/src/main`

let disposeCallback: () => Promise<void> | undefined
let acceptCallback: () => Promise<void> | undefined

global.hot = {
  dispose: (callback) => (disposeCallback = callback),
  accept: (callback) => (acceptCallback = callback),
}

const watcher = watch(WATCH_PATHS, WATCH_OPTIONS)

function clearCache() {
  Object.keys(require.cache).forEach((id) => {
    if (id.includes(PATH_RESOLVED_SERVER) || id.includes(PATH_RESOLVED_SHARED)) {
      delete require.cache[id]
    }
  })
}

const subscribeCallback = async () => {
  await disposeCallback()
  clearCache()
  return acceptCallback()
}

watcher.on('ready', () => {
  watcher.on('all', () => {
    void subscribeCallback()
  })
})

require(SERVER_ENTRY)
