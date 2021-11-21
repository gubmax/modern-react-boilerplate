import watcher from '@parcel/watcher'

import { noop } from 'src/common/helpers'

interface WatchOptions {
  path: string
  dispose: () => void | Promise<void>
  accept: () => void | Promise<void>
}

function clearCache() {
  Object.keys(require.cache).forEach((id) => {
    delete require.cache[id]
  })
}

export async function watch({ path, dispose = noop, accept = noop }: WatchOptions): Promise<void> {
  await watcher.subscribe(path, async () => {
    await dispose()
    clearCache()
    return accept()
  })
}
