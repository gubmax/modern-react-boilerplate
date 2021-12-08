import { MiddlewareConsumer, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { RequestLoggerMiddleware } from 'server/src/common/middlewares'
import { CONFIG_ENV } from 'server/config'
import { AssetCollectorModule } from './assetCollector'
import { CartModule } from './cart'
import { LoggerModule } from './logger'
import { RenderModule } from './render'

@Module({
  imports: [
    AssetCollectorModule,
    CartModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => CONFIG_ENV],
    }),
    LoggerModule,
    RenderModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*')
  }
}
