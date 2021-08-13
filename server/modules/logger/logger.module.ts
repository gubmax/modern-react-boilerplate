import { FactoryProvider, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { LoggerService } from './logger.service'
import { LOGGER_SERVICE } from './logger.constants'

const LoggerValueProvider: FactoryProvider<LoggerService> = {
  provide: LOGGER_SERVICE,
  useFactory: (configService: ConfigService) => new LoggerService(configService),
  inject: [ConfigService],
}

@Module({
  providers: [LoggerValueProvider],
  exports: [LoggerValueProvider],
})
export class LoggerModule {}
