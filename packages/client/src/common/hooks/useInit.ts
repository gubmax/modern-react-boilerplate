import { useState } from 'react'

/**
 * Calls the passed function once before initial rendering.
 * @param initializer Callback that will be called once using lazy initialization of useState
 * @returns Initializer result
 * @link https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
 */
export function useInit<T>(initializer: () => T): T {
  const [state] = useState<T>(initializer)
  return state
}
