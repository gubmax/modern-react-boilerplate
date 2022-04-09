import { FactoryProvider, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { assetCollectorSymbol } from './assetCollector.constants'
import { DevelopmentAssetCollectorService } from './assetCollector.development.service'
import { AssetCollectorService } from './assetCollector.service'

const assetsCollectorFactory: FactoryProvider<AssetCollectorService> = {
  provide: assetCollectorSymbol,
  useFactory: (configService: ConfigService) => {
    const isProdEnv = configService.get<boolean>('isProdEnv')
    return new (isProdEnv ? AssetCollectorService : DevelopmentAssetCollectorService)()
  },
  inject: [ConfigService],
}

@Module({
  providers: [assetsCollectorFactory],
  exports: [assetsCollectorFactory],
})
export class AssetCollectorModule {}
