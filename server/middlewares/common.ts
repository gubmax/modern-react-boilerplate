import { Express } from 'express'
import { json } from 'body-parser'

export function useCommonMiddlewares(server: Express): void {
  server.use(json())
  // server.use(cors())
  // server.use(csp())
  // other middlewares...
}
