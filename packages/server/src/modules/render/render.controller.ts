import { Controller, Get, Inject, Req, Res, UseFilters } from '@nestjs/common'
import type { Request, Response } from 'express'

import { PageRoutes } from 'client/src/browser/http/constants'
import { RenderExceptionsFilter } from 'server/src/common/filters'
import { renderServiceSymbol } from './render.constants'
import { RenderService } from './render.service'

@Controller(Object.values<string>(PageRoutes))
export class RenderController {
  constructor(@Inject(renderServiceSymbol) private readonly renderService: RenderService) {}

  @Get()
  @UseFilters(RenderExceptionsFilter)
  async render(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.renderService.renderMainEntry(req, res)
  }
}
