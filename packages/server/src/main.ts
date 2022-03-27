import { CONFIG_ENV } from '../config'
import { LoggerService, loggerServiceSymbol } from './modules/logger'
import { bootstrap } from './bootstrap'

// Bootstrap
if (!CONFIG_ENV.isTestEnv) {
  void (async () => {
    let app = await bootstrap()

    // Watch
    if (!CONFIG_ENV.isProdEnv) {
      globalThis.hot.dispose(async () => {
        app.get<LoggerService>(loggerServiceSymbol).warn('Restarting server...')
        return app.close()
      })

      globalThis.hot.accept(async () => {
        const { bootstrap: nextBootstrap } = (await require('./bootstrap')) as {
          bootstrap: typeof bootstrap
        }

        app = await nextBootstrap()
      })
    }
  })()
}

// For tests
export default bootstrap
