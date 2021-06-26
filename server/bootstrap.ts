import express, { Express } from 'express'

import { ENV_PROD } from './env'
import { devRender, render } from './render'
import { resolveApp } from './helpers'

const VITE_SERVER_CONFIG = {
  root: process.cwd(),
  server: {
    middlewareMode: true,
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
    app.use('*', render)
    return app
  }

  const vite = await import('vite')
  const devServer = await vite.createServer(VITE_SERVER_CONFIG)

  app.use(devServer.middlewares)
  app.use('*', devRender(devServer))

  return app
}
