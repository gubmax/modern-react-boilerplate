import chalk from 'chalk'

import { HttpExceptions, HttpStatus } from 'shared/domain/exceptions'
import { levelByNumber, colorByType, LogLevelWeights } from './logger.constants'

interface InputData {
  status: HttpStatus
  level: LogLevelWeights
  time: number
  msg: string
  pid: number
  hostname: string
  type?: HttpExceptions
  description?: string
  stack?: string
}

export function prettifier(): (inputData: InputData) => string {
  return function ({ status, time, level, msg, stack, type, description }: InputData): string {
    const { grey, bold, cyan } = chalk

    const levelText = levelByNumber[level]
    const colorFn = chalk[colorByType[levelText]]
    const prettyLevel = colorFn(levelText)
    const prettyTime = grey(new Date(time).toLocaleTimeString())

    // Errors
    if (type && description && stack) {
      const label = bold(colorFn('[server]'))
      const prettyType = grey(type)
      const prettyDesc = colorFn(`${status} (${description}):`)

      let stackStr = ''
      if (stack) {
        stack.split('\n').forEach((line, index) => {
          if (index === 0) return
          stackStr = `${stackStr}${line}\n`
        })
      }

      return `${prettyTime} ${label} ${prettyLevel} ${prettyType} ${prettyDesc} ${msg}\n${stackStr}`
    }

    // Info
    const label = bold(cyan('[server]'))
    return `${prettyTime} ${label} ${prettyLevel} ${msg}\n`
  }
}
