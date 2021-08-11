import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CONFIG_ENV } from 'server/config'

import { CartModule } from './cart'
import { LoggerModule } from './logger'
import { RenderModule } from './render'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => CONFIG_ENV],
    }),
    LoggerModule,
    CartModule,
    RenderModule,
  ],
})
export class AppModule {}
