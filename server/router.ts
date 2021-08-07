import { Express, RequestHandler } from 'express'

import { cartRouter } from './modules'

export function useRouter(server: Express, prerenderHandler: RequestHandler): void {
  // Api
  server.use([cartRouter /* other routers... */])

  // Render
  server.get('*', prerenderHandler)
}
