import express, { Express } from 'express'

import { prerenderDevMiddleware, prerenderMiddleware } from './middlewares/prerender'
import { ENV_PROD, VITE_SERVER_CONFIG } from './constants'
import { resolveApp } from './helpers'

export async function bootstrap(): Promise<Express> {
  const app = express()

  if (ENV_PROD) {
    const { default: compression } = await import('compression')
    const { default: serve } = await import('serve-static')

    app.use(compression())
    app.use(serve(resolveApp('dist/client'), { index: false }))
    app.use('*', prerenderMiddleware)
    return app
  }

  const vite = await import('vite')
  const devServer = await vite.createServer(VITE_SERVER_CONFIG)

  app.use(devServer.middlewares)
  app.use('*', prerenderDevMiddleware(devServer))

  return app
}
