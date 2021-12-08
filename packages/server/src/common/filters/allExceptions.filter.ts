import { Catch, ArgumentsHost, Logger, ExceptionFilter } from '@nestjs/common'
import { Response } from 'express'

import { HttpExceptionImpl, InternalServerException } from 'shared/exceptions'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger()

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const res = ctx.getResponse<Response>()
    let httpException: HttpExceptionImpl

    if (exception instanceof HttpExceptionImpl) {
      httpException = exception
    } else if (exception instanceof Error) {
      httpException = new InternalServerException(exception.message, exception.stack)
    } else {
      httpException = new InternalServerException('Unrecognized error')
    }

    this.logger.error(httpException)
    res.status(httpException.status).send(JSON.stringify(httpException))
  }
}
