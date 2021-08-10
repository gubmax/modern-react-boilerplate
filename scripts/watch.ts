import chokidar, { WatchOptions } from 'chokidar'

import { noop } from 'src/helpers'

interface WatchProp {
  paths: string | ReadonlyArray<string>
  options?: WatchOptions
  dispose: () => void | Promise<void>
  accept: () => void | Promise<void>
}

function clearCache() {
  Object.keys(require.cache).forEach((id) => {
    delete require.cache[id]
  })
}

export function watch({ paths, options, dispose = noop, accept = noop }: WatchProp): void {
  const watcher = chokidar.watch(paths, options)

  watcher.on('ready', () => {
    watcher.on('all', () => {
      void (async () => {
        await dispose()
        clearCache()
        void accept()
      })()
    })
  })
}
