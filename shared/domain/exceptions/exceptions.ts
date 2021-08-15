import { HttpExceptions, HttpStatus } from './constants'
import { HttpExceptionImpl } from './httpExceptionImpl'

export class InternalServerException extends HttpExceptionImpl {
  constructor(message: string) {
    super(
      HttpStatus.INTERNAL_SERVER_ERROR,
      HttpExceptions.INTERNAL,
      'Internal server error',
      message,
    )
  }
}
