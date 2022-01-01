import { Exceptions, ExceptionLevels } from './exceptions.constants'
import { ExceptionImpl } from './ExceptionImpl'

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
