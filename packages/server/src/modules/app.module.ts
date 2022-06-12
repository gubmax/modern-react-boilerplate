import { MiddlewareConsumer, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'

import { CONFIG_ENV } from 'server/config'
import { RequestLoggerMiddleware } from 'server/src/common/middlewares'
import { PATH_RESOLVED_PUBLIC } from 'shared/constants/paths'
import { AssetCollectorModule } from './assetCollector'
import { CartModule } from './cart'
import { ClientConfigModule } from './clientConfig'
import { LoggerModule } from './logger'
import { RenderModule } from './render'
import { UserAgentParserModule } from './userAgentParser'

@Module({
  imports: [
    AssetCollectorModule,
    CartModule,
    ClientConfigModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => CONFIG_ENV],
    }),
    LoggerModule,
    RenderModule,
    ServeStaticModule.forRoot({
      rootPath: PATH_RESOLVED_PUBLIC,
      renderPath: '/',
      serveStaticOptions: { index: false },
    }),
    UserAgentParserModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*')
  }
}
