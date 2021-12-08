import watcher from '@parcel/watcher'

import { noop } from 'client/src/common/helpers'
import { PATH_RESOLVED_PACKAGES } from 'shared/constants/paths'

interface WatchOptions {
  paths: string[]
  dispose: () => void | Promise<void>
  accept: () => void | Promise<void>
}

export function watch({ paths, dispose = noop, accept = noop }: WatchOptions): void {
  paths.forEach((path) => {
    void watcher.subscribe(
      path,
      async () => {
        await dispose()
        return accept()
      },
      {
        ignore: [
          // FIXME: https://github.com/parcel-bundler/watcher/issues/64
          `${PATH_RESOLVED_PACKAGES}/client/node_modules/.vite`,
          `${PATH_RESOLVED_PACKAGES}/server/node_modules/.vite`,
        ],
      },
    )
  })
}
