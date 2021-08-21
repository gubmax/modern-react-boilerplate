import fetch from 'node-fetch'

import { watch } from 'scripts/watch'
import { PATH_RESOLVED_SERVER } from './common/constants'
import { LoggerService, LOGGER_SERVICE } from './modules/logger'
import { CONFIG_ENV } from './config'
import { bootstrap } from './bootstrap'

// Fetch
;(global.fetch as unknown) = fetch

// Bootstrap
if (!CONFIG_ENV.isTestEnv) {
  void (async () => {
    let app = await bootstrap()

    // Watch
    if (!CONFIG_ENV.isProdEnv) {
      const dispose = async () => {
        app.get<LoggerService>(LOGGER_SERVICE).warn('Restarting server...')
        return app.close()
      }

      const accept = async () => {
        const { bootstrap } = await import('./bootstrap')
        app = await bootstrap()
      }

      watch({ paths: PATH_RESOLVED_SERVER, dispose, accept })
    }
  })()
}

// For tests
export default bootstrap
