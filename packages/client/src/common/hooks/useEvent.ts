import { useCallback, useRef } from 'react'

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

/**
 * It lets you define event handlers that can read the latest props/state
 * but have always stable function identity.
 * Event handlers defined with useEvent don't break memoization and don't retrigger effects.
 * @link https://github.com/reactjs/rfcs/pull/220
 */
export function useEvent<T extends (...args: any[]) => void>(handler: T): T {
  const handlerRef = useRef(handler)

  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler
  })

  return useCallback((...args: unknown[]) => {
    const fn = handlerRef.current
    return fn(...args)
  }, []) as T
}
