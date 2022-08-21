import { HttpExceptions } from './constants'
import { HttpExceptionImpl } from './httpExceptionImpl'

export class BadRequestException extends HttpExceptionImpl {
  constructor(error: unknown, priorityMessage?: string) {
    super(400, HttpExceptions.BAD_REQUEST, 'Bad Request', error, priorityMessage)
  }
}

export class NotFoundException extends HttpExceptionImpl {
  constructor(error: unknown, priorityMessage?: string) {
    super(404, HttpExceptions.NOT_FOUND, 'Not found error', error, priorityMessage)
  }
}

export class InternalServerException extends HttpExceptionImpl {
  constructor(error: unknown, priorityMessage?: string) {
    super(500, HttpExceptions.INTERNAL, 'Internal server error', error, priorityMessage)
  }
}
