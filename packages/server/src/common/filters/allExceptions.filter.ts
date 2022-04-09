import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common'
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

    httpException.status >= 500
      ? this.logger.error(httpException)
      : this.logger.verbose(httpException)

    res.status(httpException.status).send(httpException)
  }
}
