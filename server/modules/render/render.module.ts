import { FactoryProvider, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { RenderController } from './render.controller'
import { RenderService } from './render.service'
import { DevelopmentRenderService } from './render.development.service'
import { renderServiceSymbol } from './render.constants'
import { HttpClientService } from '../httpClient'

const RenderServiceProvider: FactoryProvider<RenderService> = {
  provide: renderServiceSymbol,
  useFactory: (configService: ConfigService, httpClientService: HttpClientService) => {
    const isProdEnv = configService.get<boolean>('isProdEnv')
    return new (isProdEnv ? RenderService : DevelopmentRenderService)(httpClientService)
  },
  inject: [ConfigService, HttpClientService],
}

@Module({
  controllers: [RenderController],
  providers: [RenderServiceProvider, HttpClientService],
})
export class RenderModule {}
