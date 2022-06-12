import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  Inject,
  NotFoundException as NestNotFoundException,
} from '@nestjs/common'
import { Request, Response } from 'express'

import { RenderService, renderServiceSymbol } from 'server/src/modules/render'
import { NotFoundException } from 'shared/exceptions'

@Catch(NotFoundException, NestNotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  constructor(@Inject(renderServiceSymbol) private readonly renderService: RenderService) {}

  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()

    const req = ctx.getRequest<Request>()
    const res = ctx.getResponse<Response>()

    this.renderService.renderNotFoundEntry(req, res)
  }
}
