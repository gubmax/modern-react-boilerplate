import express, { Express } from 'express'
import { InlineConfig } from 'vite'

import { ENV_PROD } from './env'
import { handleEntry, handleDevEntry } from './handleEntry'
import { resolveApp } from './helpers'

const VITE_SERVER_CONFIG: InlineConfig = {
  server: {
    middlewareMode: 'ssr',
    watch: {
      usePolling: true,
      interval: 500,
    },
  },
}

export async function bootstrap(): Promise<Express> {
  const app = express()

  if (ENV_PROD) {
    const { default: compression } = await import('compression')
    const { default: serve } = await import('serve-static')

    app.use(compression())
    app.use(serve(resolveApp('dist/client'), { index: false }))
    app.use('*', handleEntry)
    return app
  }

  const vite = await import('vite')
  const devServer = await vite.createServer(VITE_SERVER_CONFIG)

  app.use(devServer.middlewares)
  app.use('*', handleDevEntry(devServer))

  return app
}
