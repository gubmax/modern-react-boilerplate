import { Controller, Get, Inject, Req, Res, UseFilters } from '@nestjs/common'
import { Request, Response } from 'express'

import { ApiRoutes } from 'shared/http'
import { RenderService } from './render.service'
import { renderServiceSymbol } from './render.constants'

@Controller(ApiRoutes.RENDER)
export class RenderController {
  constructor(@Inject(renderServiceSymbol) private readonly renderService: RenderService) {}

  @Get()
  async render(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.renderService.render(req, res)
  }
}
