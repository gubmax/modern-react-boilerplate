import { Controller, Get, Inject, Req, Res } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Request, Response } from 'express'

import { ApiRoutes } from 'shared/http'
import { RenderService } from './render.service'

@Controller(ApiRoutes.RENDER)
export class RenderController {
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
    @Inject(RenderService) private readonly renderService: RenderService,
  ) {}

  @Get()
  async render(@Req() req: Request, @Res() res: Response): Promise<void> {
    const isProdEnv = this.configService.get<boolean>('isProdEnv')

    if (isProdEnv) {
      return this.renderService.render(req, res)
    }

    return this.renderService.renderDev(req, res)
  }
}
