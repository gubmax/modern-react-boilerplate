import { FactoryProvider, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import {
  AssetCollectorModule,
  AssetCollectorService,
  assetCollectorSymbol,
} from '../assetCollector'
import { ClientConfigService } from '../clientConfig'
import { HttpClientService } from '../httpClient'
import { UserAgentParserModule } from '../userAgentParser'
import { renderServiceSymbol } from './render.constants'
import { RenderController } from './render.controller'
import { DevelopmentRenderService } from './render.development.service'
import { RenderService } from './render.service'

const renderServiceFactory: FactoryProvider<RenderService> = {
  provide: renderServiceSymbol,
  useFactory: (
    assetCollector: AssetCollectorService,
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
