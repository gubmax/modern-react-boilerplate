import pino, { Logger } from 'pino'
import { LoggerService as NestLoggerService } from '@nestjs/common'

export class LoggerService implements NestLoggerService {
  protected readonly logger: Logger

  constructor() {
    this.logger = pino()
  }

  log(message: string): void {
    this.logger.info(message)
  }

  error(error: Error): void {
    this.logger.error(error, error.message)
  }

  warn(message: string): void {
    this.logger.warn(message)
  }

  debug(message: string): void {
    this.logger.debug(message)
  }
}
