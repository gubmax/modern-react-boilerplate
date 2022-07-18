export function assert(condition: unknown, msg?: string): asserts condition {
  if (!(typeof condition === 'function' ? condition() : condition)) {
    throw new Error(msg)
  }
}
