import chalk from 'chalk'

import { HttpLoggerMarks } from 'server/common/middlewares'
import { HttpExceptions, HttpStatus } from 'shared/exceptions'
import { levelByNumber, colorByType, LogLevelWeights } from './logger.constants'

interface HttpData {
  url: string
  method: string
  statusCode: string
  executionTime: number
}

interface ErrorData {
  type: HttpExceptions
  description: string
  stack: string
}

interface InputData extends Partial<ErrorData & HttpData> {
  status: HttpStatus
  time: number
  level: LogLevelWeights
  msg: string
  pid: number
  hostname: string
}

export function prettifier(): (inputData: InputData) => string {
  return function ({
    status,
    time,
    level,
    msg,
    // error
    type,
    description,
    stack,
    // req / res
    url,
    method,
    statusCode,
    executionTime,
  }: InputData): string {
    const { dim, green } = chalk

    const levelText = levelByNumber[level]
    const colorFn = chalk[colorByType[levelText]]
    const prettyLevel = colorFn(levelText)
    const prettyTime = dim(new Date(time).toLocaleTimeString())
    const baseStr = `${prettyTime} ${prettyLevel}`

    // Request
    if (msg === HttpLoggerMarks.REQ && method && url) {
      return `${baseStr} ${dim('<--')} ${method} xxx ${url}\n`
    }

    // Response
    if (msg === HttpLoggerMarks.RES && method && statusCode && url && executionTime !== undefined) {
      return `${baseStr} ${green('-->')} ${method} ${statusCode} ${url} ${dim(
        `${executionTime}ms`,
      )}\n`
    }

    // Error
    if (type && description && stack) {
      const prettyType = dim(type)
      const prettyDesc = colorFn(`${status} (${description}):`)

      let stackStr = ''
      if (stack) {
        stack.split('\n').forEach((line, index) => {
          if (index === 0) return
          stackStr = `${stackStr}${line}\n`
        })
      }

      return `${baseStr} ${prettyType} ${prettyDesc} ${msg}\n${stackStr}`
    }

    // Info
    return `${baseStr} ${msg}\n`
  }
}
