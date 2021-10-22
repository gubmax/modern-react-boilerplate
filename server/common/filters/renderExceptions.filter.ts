import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common'
import { Response } from 'express'

import { InternalServerException } from 'shared/exceptions'

@Catch()
export class RenderExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger()

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const res = ctx.getResponse<Response>()

    const error =
      exception instanceof Error ? exception : new InternalServerException('Uncaught error')

    this.logger.error(error)

    res.status(500).send(`
      <h1>Error</h1>
      <p>${error.message}</p>
    `)
  }
}
