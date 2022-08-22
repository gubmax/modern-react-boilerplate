import { Controller, Get, Inject, Req, Res, UseFilters } from '@nestjs/common'
import type { Request, Response } from 'express'

import { PageRoutes } from 'client/src/browser/http/constants'
import { RenderExceptionsFilter } from 'server/src/common/filters'
import { HtmlEntries } from 'shared/constants/entries'
import { renderServiceSymbol } from './render.constants'
import { RenderService } from './render.service'

@Controller(Object.values<string>(PageRoutes))
@UseFilters(RenderExceptionsFilter)
export class RenderController {
  constructor(@Inject(renderServiceSymbol) private readonly renderService: RenderService) {}

  @Get()
  async render(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.renderService.renderEntry(200, HtmlEntries.MAIN)(req, res)
  }

  @Get(PageRoutes.SIGN_IN)
  async renderSignIn(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.renderService.renderEntry(200, HtmlEntries.SIGN_IN)(req, res)
  }

  @Get(PageRoutes.SIGN_UP)
  async renderSignUp(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.renderService.renderEntry(200, HtmlEntries.SIGN_UP)(req, res)
  }
}
