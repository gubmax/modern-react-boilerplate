import pino, { Logger } from 'pino'
import { LoggerService as NestLoggerService, Inject } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { prettifier } from './prettifier'

export class LoggerService implements NestLoggerService {
  protected readonly logger: Logger

  constructor(@Inject(ConfigService) private readonly configService: ConfigService) {
    const isProdEnv = this.configService.get<boolean>('isProdEnv')
    const logLevel = this.configService.get<string>('logLevel') || 'trace'

    this.logger = pino({ prettyPrint: !isProdEnv, prettifier })
    this.logger.level = logLevel
  }

  trace(message: string): void {
    this.logger.trace(message)
  }

  debug(message: string): void {
    this.logger.debug(message)
  }

  log(message: string): void {
    this.logger.info(message)
  }

  warn(message: string): void {
    this.logger.warn(message)
  }

  error(error: Error): void {
    this.logger.error(error, error.message)
  }

  fatal(error: Error): void {
    this.logger.fatal(error, error.message)
  }
}
