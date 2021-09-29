import { FactoryProvider, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { RenderController } from './render.controller'
import { RenderService } from './render.service'
import { renderServiceSymbol } from './render.constants'
import { DevelopmentRenderService } from './developmentRender.service'

const RenderServiceProvider: FactoryProvider<RenderService> = {
  provide: renderServiceSymbol,
  useFactory: (configService: ConfigService) => {
    const isProdEnv = configService.get<boolean>('isProdEnv')
    return new (isProdEnv ? RenderService : DevelopmentRenderService)()
  },
  inject: [ConfigService],
}

@Module({
  controllers: [RenderController],
  providers: [RenderServiceProvider],
})
export class RenderModule {}
