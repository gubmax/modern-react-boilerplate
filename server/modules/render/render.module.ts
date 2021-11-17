import { FactoryProvider, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { RenderController } from './render.controller'
import { RenderService } from './render.service'
import { DevelopmentRenderService } from './render.development.service'
import { HttpClientService } from '../httpClient'
import {
  AssetCollectorModule,
  AssetCollectorService,
  assetCollectorSymbol,
} from '../assetCollector'
import { renderServiceSymbol } from './render.constants'

const renderServiceFactory: FactoryProvider<RenderService> = {
  provide: renderServiceSymbol,
  useFactory: (
    configService: ConfigService,
    httpClientService: HttpClientService,
    assetCollector: AssetCollectorService,
  ) => {
    const isProdEnv = configService.get<boolean>('isProdEnv')
    return new (isProdEnv ? RenderService : DevelopmentRenderService)(
      configService,
      httpClientService,
      assetCollector,
    )
  },
  inject: [ConfigService, HttpClientService, assetCollectorSymbol],
}

@Module({
  imports: [AssetCollectorModule],
  controllers: [RenderController],
  providers: [renderServiceFactory, HttpClientService],
})
export class RenderModule {}
