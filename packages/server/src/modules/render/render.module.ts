import { FactoryProvider, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import {
  AssetCollectorModule,
  AssetCollectorService,
  assetCollectorSymbol,
  DevelopmentAssetCollectorService,
} from '../assetCollector'
import { ClientConfigService } from '../clientConfig'
import { HttpClientService } from '../httpClient'
import { UserAgentParserModule } from '../userAgentParser'
import { renderServiceSymbol } from './render.constants'
import { RenderController } from './render.controller'
import { RenderService } from './render.service'
import { DevelopmentRenderService } from './render.service.development'

const renderServiceFactory: FactoryProvider<RenderService> = {
  provide: renderServiceSymbol,
  useFactory: (
    assetCollector: AssetCollectorService & DevelopmentAssetCollectorService,
    clientConfig: ClientConfigService,
    configService: ConfigService,
    httpClientService: HttpClientService,
  ) => {
    const isProdEnv = configService.get<boolean>('isProdEnv')
    return new (isProdEnv ? RenderService : DevelopmentRenderService)(
      assetCollector,
      clientConfig,
      configService,
      httpClientService,
    )
  },
  inject: [assetCollectorSymbol, ClientConfigService, ConfigService, HttpClientService],
}

@Module({
  imports: [AssetCollectorModule, UserAgentParserModule],
  controllers: [RenderController],
  providers: [renderServiceFactory, ClientConfigService, HttpClientService],
})
export class RenderModule {}
