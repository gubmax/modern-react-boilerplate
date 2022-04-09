import chalk from 'chalk'

import { TransportMarks } from 'server/src/common/constants/transports'
import { HttpExceptions, HttpStatus } from 'shared/exceptions'
import { colorByType, levelByNumber, LogLevelWeights } from './logger.constants'

interface Transport {
  transport: string
}

interface HttpTransportData extends Transport {
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

interface InputData extends Partial<ErrorData & HttpTransportData> {
  status: HttpStatus
  time: number
  level: LogLevelWeights
  msg: string
  pid: number
  hostname: string
}

export function prettifier(): (inputData: InputData) => string {
  return function (input: InputData): string {
    const { dim, green, red, yellow, cyan } = chalk
    const { status = HttpStatus.INTERNAL_SERVER_ERROR, time, level, msg } = input

    const levelText = levelByNumber[level]
    const baseColorFn = chalk[colorByType[levelText]]
    const prettyTime = dim(new Date(time).toLocaleTimeString())
    const baseStr = `${prettyTime} ${baseColorFn(levelText)}`
    const joinMsg = (...arr: Array<string | undefined>): string =>
      [baseStr].concat([...arr.filter((item): item is string => !!item), '\n']).join(' ')

    // Http transport
    const marks: string[] = Object.values(TransportMarks)
    if (marks.includes(msg)) {
      const { transport, url, method, statusCode, executionTime } = input
      const prettyTransport = transport ? dim(transport) : ''

      // Request
      const requestMarks: string[] = [TransportMarks.REQ, TransportMarks.REQ_INTERNAL]
      if (requestMarks.includes(msg)) {
        const colorFn = { [TransportMarks.REQ_INTERNAL]: cyan }[msg] || dim
        return joinMsg(prettyTransport, colorFn('<--'), method, dim('xxx'), url)
      }

      // Response
      const responseMarks: string[] = [TransportMarks.RES, TransportMarks.RES_INTERNAL]
      if (responseMarks.includes(msg)) {
        const code = Number(statusCode)
        const statusColorFn = code >= 500 ? red : code >= 300 ? yellow : green
        const colorFn = { [TransportMarks.RES_INTERNAL]: cyan }[msg] || statusColorFn
        const ms = executionTime ? dim(`${executionTime}ms`) : ''

        return joinMsg(prettyTransport, colorFn('-->'), method, statusColorFn(statusCode), url, ms)
      }
    }

    // Error
    if (input.stack) {
      const { type = HttpExceptions.INTERNAL, description = 'Uncaught error', stack } = input
      const prettyType = dim(type)
      const prettyDesc = baseColorFn(`${status} (${description}):`)

      let stackStr = ''
      stack.split('\n').forEach((line, index) => {
        if (index === 0) return
        stackStr = `${stackStr}${line}\n`
      })

      return joinMsg(prettyType, prettyDesc, msg).concat(stackStr)
    }

    // Info
    return joinMsg(msg)
  }
}
