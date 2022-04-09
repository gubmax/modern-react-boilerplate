import { Controller, Get, Inject, Req, Res, UseFilters } from '@nestjs/common'
import { Request, Response } from 'express'

import { RenderExceptionsFilter } from 'server/src/common/filters'
import { ApiRoutes } from 'shared/http/constants'
import { renderServiceSymbol } from './render.constants'
import { RenderService } from './render.service'

@Controller(ApiRoutes.RENDER)
export class RenderController {
  constructor(@Inject(renderServiceSymbol) private readonly renderService: RenderService) {}

  @Get()
  @UseFilters(RenderExceptionsFilter)
  async render(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.renderService.renderMainEntry(req, res)
  }
}
