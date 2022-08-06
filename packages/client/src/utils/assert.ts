import { FatalException } from 'client/src/common/domain/exceptions'

/**
 * Function that throw an error if something unexpected happened.
 * Asserts condition says that whatever gets passed into the condition parameter must be true
 * (because otherwise it would throw an error).
 */
export function assert(condition: unknown, message?: string): asserts condition {
  if (!condition) {
    throw new FatalException({ title: 'Assertion Error', message })
  }
}
