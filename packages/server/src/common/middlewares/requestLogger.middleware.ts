import { Logger, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

import { TransportMarks, Transports } from '../constants/transports'

export class RequestLoggerMiddleware implements NestMiddleware {
  private logger = new Logger()

  use(req: Request, res: Response, next: NextFunction): void {
    const { method, baseUrl } = req
    const now = Date.now()
    const url = baseUrl.length ? baseUrl : '/'

    this.logger.verbose({ transport: Transports.HTTP, msg: TransportMarks.REQ, url, method })

    res.on('close', () => {
      const { statusCode } = res
      this.logger.log({
        transport: Transports.HTTP,
        msg: TransportMarks.RES,
        url,
        method,
        statusCode,
        executionTime: Date.now() - now,
      })
    })

    next()
  }
}
