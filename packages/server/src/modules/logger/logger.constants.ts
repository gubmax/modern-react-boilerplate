import { ForegroundColor } from 'chalk'

export const loggerServiceSymbol = 'LoggerService'

export enum LogLevelTexts {
  TRACE = 'TRACE',
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  FATAL = 'FATAL',
}

export enum LogLevelWeights {
  TRACE = 10,
  DEBUG = 20,
  INFO = 30,
  WARN = 40,
  ERROR = 50,
  FATAL = 60,
}

export const colorByType: Record<string, typeof ForegroundColor> = {
  [LogLevelTexts.TRACE]: 'cyan',
  [LogLevelTexts.DEBUG]: 'green',
  [LogLevelTexts.INFO]: 'blue',
  [LogLevelTexts.WARN]: 'yellow',
  [LogLevelTexts.ERROR]: 'red',
  [LogLevelTexts.FATAL]: 'magenta',
}

export const levelByNumber: Record<string, LogLevelTexts> = {
  [LogLevelWeights.TRACE]: LogLevelTexts.TRACE,
  [LogLevelWeights.DEBUG]: LogLevelTexts.DEBUG,
  [LogLevelWeights.INFO]: LogLevelTexts.INFO,
  [LogLevelWeights.WARN]: LogLevelTexts.WARN,
  [LogLevelWeights.ERROR]: LogLevelTexts.ERROR,
  [LogLevelWeights.FATAL]: LogLevelTexts.FATAL,
}
