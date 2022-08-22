import { ArgumentsHost, Catch, ExceptionFilter, Inject, Logger } from '@nestjs/common'
import { Request, Response } from 'express'

import { RenderService } from 'server/src/modules/render'
import { HtmlEntries } from 'shared/constants/entries'
import { InternalServerException } from 'shared/exceptions'

@Catch()
export class RenderExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger()

  constructor(@Inject('RenderService') private readonly renderService: RenderService) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const req = ctx.getRequest<Request>()
    const res = ctx.getResponse<Response>()

    const error =
      exception instanceof Error ? exception : new InternalServerException('Uncaught error')

    this.logger.error(error)

    void this.renderService.renderEntry(500, HtmlEntries.INTERNAL_ERROR)(req, res)
  }
}
