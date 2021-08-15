import { Catch, ArgumentsHost, HttpStatus, LoggerService } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { Response } from 'express'

import { HttpExceptionImpl } from 'shared/domain/exceptions'

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  constructor(private logger: LoggerService) {
    super()
  }

  catch(exception: Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const res = ctx.getResponse<Response>()

    const status =
      exception instanceof HttpExceptionImpl ? exception.status : HttpStatus.INTERNAL_SERVER_ERROR

    this.logger.error(exception)
    res.status(status).send(JSON.stringify(exception))
  }
}
