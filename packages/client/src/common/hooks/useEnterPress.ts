import { KeyboardEvent, useCallback } from 'react'

export function useEnterPress(callback: () => void) {
  return useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        callback()
      }
    },
    [callback],
  )
}
