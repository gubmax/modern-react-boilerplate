import chalk from 'chalk'

import { levelByNumber, colorByType, LogLevelWeights } from './logger.constants'

interface InputData {
  level: LogLevelWeights
  time: number
  msg: string
  pid: number
  hostname: string
}

export function prettifier(): (inputData: InputData) => string {
  return function ({ time, level, msg }: InputData): string {
    const { grey, bold, cyan } = chalk

    const levelText = levelByNumber[level]
    const color = colorByType[levelText]
    const prettyLevel = chalk[color](levelText)
    const prettyTime = new Date(time).toLocaleTimeString()

    return `${grey(prettyTime)} ${bold(cyan('[server]'))} ${prettyLevel} ${msg}\n`
  }
}
