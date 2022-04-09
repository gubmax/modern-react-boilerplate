import { ExceptionImpl } from './ExceptionImpl'
import { ExceptionLevels, Exceptions } from './exceptions.constants'

export class Warning extends ExceptionImpl {
  type = Exceptions.WARNING
  level = ExceptionLevels.WARNING
}

export class SevereException extends ExceptionImpl {
  type = Exceptions.SEVERE
  level = ExceptionLevels.SEVERE
}

export class FatalException extends ExceptionImpl {
  type = Exceptions.FATAL
  level = ExceptionLevels.FATAL
}
