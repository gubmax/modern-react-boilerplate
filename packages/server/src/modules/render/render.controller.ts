import { Controller, Get, Inject, Req, Res, UseFilters } from '@nestjs/common'
import type { Request, Response } from 'express'

import { PageRoutes } from 'client/src/browser/http/constants'
import { RenderExceptionsFilter } from 'server/src/common/filters'
import { renderServiceSymbol } from './render.constants'
import { RenderService } from './render.service'

@Controller(Object.values<string>(PageRoutes))
@UseFilters(RenderExceptionsFilter)
export class RenderController {
  constructor(@Inject(renderServiceSymbol) private readonly renderService: RenderService) {}

  @Get(PageRoutes.ROOT)
  renderRoot(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.renderService.renderEntry(200)(req, res)
  }

  @Get(PageRoutes.ABOUT)
  renderAbout(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.renderService.renderEntry(200)(req, res)
  }

  @Get(PageRoutes.CART)
  renderCart(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.renderService.renderEntry(200)(req, res)
  }

  @Get(PageRoutes.COLLECTION)
  renderCollection(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.renderService.renderEntry(200)(req, res)
  }

  @Get(PageRoutes.HELP)
  renderHelp(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.renderService.renderEntry(200)(req, res)
  }

  @Get(PageRoutes.SALES)
  renderSales(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.renderService.renderEntry(200)(req, res)
  }

  @Get(PageRoutes.SCHEDULE)
  renderSchedule(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.renderService.renderEntry(200)(req, res)
  }

  @Get(PageRoutes.SETTINGS)
  renderSettings(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.renderService.renderEntry(200)(req, res)
  }

  @Get(PageRoutes.SIGN_IN)
  renderSignIn(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.renderService.renderEntry(200)(req, res)
  }

  @Get(PageRoutes.SIGN_UP)
  renderSignUp(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.renderService.renderEntry(200)(req, res)
  }
}
