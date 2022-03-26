import { FactoryProvider, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import {
  AssetCollectorModule,
  AssetCollectorService,
  assetCollectorSymbol,
} from '../assetCollector'
import { HttpClientService } from '../httpClient'
import { UserAgentParserService } from '../userAgentParser'
import { RenderController } from './render.controller'
import { RenderService } from './render.service'
import { DevelopmentRenderService } from './render.development.service'
import { renderServiceSymbol } from './render.constants'

const renderServiceFactory: FactoryProvider<RenderService> = {
  provide: renderServiceSymbol,
  useFactory: (
    configService: ConfigService,
    httpClientService: HttpClientService,
    assetCollector: AssetCollectorService,
    userAgentParser: UserAgentParserService,
  ) => {
    const isProdEnv = configService.get<boolean>('isProdEnv')
    return new (isProdEnv ? RenderService : DevelopmentRenderService)(
      configService,
      httpClientService,
      assetCollector,
      userAgentParser,
    )
  },
  inject: [ConfigService, HttpClientService, assetCollectorSymbol, UserAgentParserService],
}

@Module({
  imports: [AssetCollectorModule],
  controllers: [RenderController],
  providers: [renderServiceFactory, HttpClientService, UserAgentParserService],
})
export class RenderModule {}
