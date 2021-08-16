import { Catch, ArgumentsHost, HttpStatus } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { Response } from 'express'

import { LoggerService } from 'server/modules/logger'
import { HttpExceptionImpl, InternalServerException } from 'shared/domain/exceptions'

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  constructor(private logger: LoggerService) {
    super()
  }

  catch(error: Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const res = ctx.getResponse<Response>()

    const exception =
      error instanceof HttpExceptionImpl ? error : new InternalServerException(error.message)

    this.logger.error(exception)
    res.status(exception.status).send(JSON.stringify(exception))
  }
}
