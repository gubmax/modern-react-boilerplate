import { FactoryProvider, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { DevelopmentAssetCollectorService } from './assetCollector.development.service'
import { AssetCollectorService } from './assetCollector.service'
import { assetCollectorSymbol } from './assetCollector.constants'

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
