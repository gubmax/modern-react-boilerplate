import { MiddlewareConsumer, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { CONFIG_ENV } from 'server/config'
import { RequestLoggerMiddleware } from 'server/src/common/middlewares'
import { AssetCollectorModule } from './assetCollector'
import { CartModule } from './cart'
import { LoggerModule } from './logger'
import { RenderModule } from './render'
import { UserAgentParserModule } from './userAgentParser'

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
    UserAgentParserModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*')
  }
}
