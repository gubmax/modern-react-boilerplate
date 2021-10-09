import { NestMiddleware, Logger } from '@nestjs/common'

import { Request, Response, NextFunction } from 'express'

export enum HttpLoggerMarks {
  REQ = '$$REQ',
  RES = '$$RES',
}

export class RequestLoggerMiddleware implements NestMiddleware {
  private logger = new Logger()

  use(req: Request, res: Response, next: NextFunction): void {
    const { method, baseUrl } = req
    const now = Date.now()
    const url = baseUrl.length ? baseUrl : '/'

    this.logger.log({ msg: HttpLoggerMarks.REQ, url, method })

    res.on('close', () => {
      const { statusCode } = res
      this.logger.log({
        msg: HttpLoggerMarks.RES,
        url,
        method,
        statusCode,
        executionTime: Date.now() - now,
      })
    })

    next()
  }
}
