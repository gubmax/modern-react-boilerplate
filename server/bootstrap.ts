import express, { Express } from 'express'
import { json } from 'body-parser'

import { prerenderDev, prerender } from './middlewares'
import { ENV_PROD, VITE_SERVER_CONFIG } from './constants'
import { resolveApp } from './helpers'
import { useRouter } from './router'

export async function bootstrap(): Promise<Express> {
  const server = express()

  server.use(json())

  if (ENV_PROD) {
    const { default: compression } = await import('compression')
    const { default: serve } = await import('serve-static')

    server.use(compression())
    server.use(serve(resolveApp('dist/client'), { index: false }))
    useRouter(server, prerender)

    return server
  }

  const vite = await import('vite')
  const devServer = await vite.createServer(VITE_SERVER_CONFIG)

  server.use(devServer.middlewares)
  useRouter(server, prerenderDev(devServer))

  return server
}
