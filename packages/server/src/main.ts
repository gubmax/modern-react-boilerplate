import { PATH_RESOLVED_SERVER, PATH_RESOLVED_SHARED } from 'shared/constants/paths'
import { watch } from 'server/scripts/watch'
import { CONFIG_ENV } from '../config'
import { LoggerService, loggerServiceSymbol } from './modules/logger'
import { bootstrap } from './bootstrap'

// Bootstrap
if (!CONFIG_ENV.isTestEnv) {
  void (async () => {
    let app = await bootstrap()

    // Watch
    if (!CONFIG_ENV.isProdEnv) {
      const dispose = async () => {
        app.get<LoggerService>(loggerServiceSymbol).warn('Restarting server...')
        return app.close()
      }

      const accept = async () => {
        const { bootstrap } = await import('./bootstrap')
        app = await bootstrap()
      }

      void watch({ paths: [PATH_RESOLVED_SERVER, PATH_RESOLVED_SHARED], dispose, accept })
    }
  })()
}

// For tests
export default bootstrap
