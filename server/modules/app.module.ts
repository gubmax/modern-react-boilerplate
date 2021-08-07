import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CONFIG_ENV } from 'server/config'

import { CartModule } from './cart'
import { RenderModule } from './render'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => CONFIG_ENV],
    }),
    CartModule,
    RenderModule,
  ],
})
export class AppModule {}
