import { HttpExceptions } from './constants'

export class HttpExceptionImpl extends Error {
  readonly status: number
  readonly type: HttpExceptions
  readonly description: string
  readonly stack?: string

  constructor(
    status: number,
    type: HttpExceptions,
    description: string,
    error: unknown,
    priorityMessage?: string,
  ) {
    const isErrorImpl = error instanceof Error

    super(priorityMessage ?? (isErrorImpl ? error.message : ''))
    this.status = status
    this.type = type
    this.description = description

    if (error) {
      if (isErrorImpl) super.stack = error.stack
      else if (typeof error === 'string') super.stack = error
    }
  }
}
