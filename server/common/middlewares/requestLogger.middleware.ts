import { NestMiddleware, Logger } from '@nestjs/common'

import { Request, Response, NextFunction } from 'express'

export class RequestLoggerMiddleware implements NestMiddleware {
  private logger = new Logger()

  use(req: Request, res: Response, next: NextFunction): void {
    const { method, baseUrl } = req
    const now = Date.now()
    const url = baseUrl.length ? baseUrl : '/'

    this.logger.log(`Req {${url}, ${method}}`)

    res.on('close', () => {
      const { statusCode } = res
      this.logger.log(`Res {${url}, ${method}, ${statusCode}, ${Date.now() - now}ms}`)
    })

    next()
  }
}
