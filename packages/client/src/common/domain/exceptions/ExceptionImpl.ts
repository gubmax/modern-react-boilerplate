import { ExceptionLevels, Exceptions } from './exceptions.constants'

export interface ExceptionImplProps {
  title?: string
  message?: string
}

export abstract class ExceptionImpl extends Error {
  abstract readonly type: Exceptions
  abstract readonly level: ExceptionLevels
  readonly title?: string

  constructor({ title, message = '' }: ExceptionImplProps = {}) {
    super(message)
    this.title = title
  }
}
