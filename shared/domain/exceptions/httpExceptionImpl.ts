import { HttpExceptions } from './constants'

export class HttpExceptionImpl extends Error {
  readonly status: number
  readonly type: HttpExceptions
  readonly description: string
  readonly message: string

  constructor(status: number, type: HttpExceptions, description: string, message: string) {
    super()
    this.status = status
    this.type = type
    this.description = description
    this.message = message
  }
}
