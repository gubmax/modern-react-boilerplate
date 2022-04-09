import { FactoryProvider, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { loggerServiceSymbol } from './logger.constants'
import { LoggerService } from './logger.service'

const LoggerValueProvider: FactoryProvider<LoggerService> = {
  provide: loggerServiceSymbol,
  useFactory: (configService: ConfigService) => new LoggerService(configService),
  inject: [ConfigService],
}

@Module({
  providers: [LoggerValueProvider],
  exports: [LoggerValueProvider],
})
export class LoggerModule {}
