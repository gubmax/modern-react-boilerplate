import { LoggerService as NestLoggerService } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import pino, { P } from 'pino'

import { HttpExceptionImpl } from 'shared/exceptions'
import { prettifier } from './prettifier'

type MsgData = string | { msg: string }

export class LoggerService implements NestLoggerService {
  protected readonly logger: P.Logger

  constructor(private readonly configService: ConfigService) {
    const isProdEnv = this.configService.get<boolean>('isProdEnv')
    const logLevel = this.configService.get<string>('logLevel') || 'trace'

    this.logger = pino({ prettyPrint: !isProdEnv, prettifier })
    this.logger.level = logLevel
  }

  private formatMsg(msg: MsgData): { msg: string } {
    return typeof msg === 'string' ? { msg } : msg
  }

  verbose(msg: MsgData): void {
    this.logger.trace(this.formatMsg(msg))
  }

  debug(msg: MsgData): void {
    this.logger.debug(this.formatMsg(msg))
  }

  log(msg: MsgData): void {
    this.logger.info(this.formatMsg(msg))
  }

  warn(msg: MsgData): void {
    this.logger.warn(this.formatMsg(msg))
  }

  error(error: HttpExceptionImpl): void {
    const { type, description, stack } = error
    this.logger.error(error, error.message, { type, description, stack })
  }

  fatal(error: HttpExceptionImpl): void {
    const { type, description, stack } = error
    this.logger.error(error, error.message, { type, description, stack })
  }
}
