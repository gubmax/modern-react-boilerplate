import assert from 'node:assert'

import picocolors, { cyan, dim, green, red, yellow } from 'picocolors'
import { PinoPretty } from 'pino-pretty'

import { TransportMarks } from 'server/src/common/constants/transports'
import { HttpExceptions } from 'shared/exceptions'
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

interface InputData extends Partial<HttpTransportData> {
  err?: ErrorData
  hostname: string
  level: LogLevelWeights
  msg: string
  pid: number
  status: number
  time: number
}

const baseColor = (level: string | number, description: string) => {
  const levelText = levelByNumber[level]
  const baseColorFn = picocolors[colorByType[levelText]]

  assert(typeof baseColorFn === 'function')

  return baseColorFn(description)
}

export const timePrettifier: PinoPretty.Prettifier = (time) => {
  if (typeof time === 'object') return ''

  return dim(time)
}

export const levelPrettifier: PinoPretty.Prettifier = (level) => {
  if (typeof level === 'object') return ''

  const levelText = levelByNumber[level]

  return baseColor(level, levelText)
}

const joinMsg = (...arr: Array<string | undefined>): string =>
  arr.filter((item): item is string => !!item).join(' ')

export const messageFormat: PinoPretty.MessageFormatFunc = (log, messageKey) => {
  const input = log as unknown as InputData
  const msg = log[messageKey] as string

  // Http transport
  const marks: string[] = Object.values(TransportMarks)
  if (marks.includes(msg)) {
    const { transport, url, method, statusCode, executionTime } = input
    const prettyTransport = transport ? dim(transport) : ''

    // Request
    const requestMarks: string[] = [TransportMarks.REQ, TransportMarks.REQ_INTERNAL]
    if (requestMarks.includes(msg)) {
      const colorFn = { [TransportMarks.REQ_INTERNAL]: cyan }[msg] ?? dim
      return joinMsg(prettyTransport, colorFn('<--'), method, dim('xxx'), url)
    }

    // Response
    const responseMarks: string[] = [TransportMarks.RES, TransportMarks.RES_INTERNAL]
    if (responseMarks.includes(msg)) {
      const code = Number(statusCode)
      const statusColorFn = code >= 500 ? red : code >= 300 ? yellow : green
      const colorFn = { [TransportMarks.RES_INTERNAL]: cyan }[msg] ?? statusColorFn
      const ms = executionTime ? dim(`${executionTime}ms`) : ''

      return joinMsg(prettyTransport, colorFn('-->'), method, statusColorFn(statusCode), url, ms)
    }
  }

  // Error
  if (input.err) {
    const {
      level,
      err: { type = HttpExceptions.INTERNAL, description = 'Uncaught error', stack },
    } = input

    const prettyType = dim(type)
    const prettyDesc = baseColor(level, description)

    return joinMsg(prettyType, prettyDesc, msg).concat('\n', stack)
  }

  // Info
  return joinMsg(msg)
}
