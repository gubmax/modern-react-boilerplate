import { HttpExceptions, HttpStatus } from './constants'
import { HttpExceptionImpl } from './httpExceptionImpl'

export class BadRequestException extends HttpExceptionImpl {
  constructor(message: string, stack?: string) {
    super(HttpStatus.BAD_REQUEST_ERROR, HttpExceptions.BAD_REQUEST, 'Bad Request', message, stack)
  }
}

export class InternalServerException extends HttpExceptionImpl {
  constructor(message: string, stack?: string) {
    super(
      HttpStatus.INTERNAL_SERVER_ERROR,
      HttpExceptions.INTERNAL,
      'Internal server error',
      message,
      stack,
    )
  }
}
