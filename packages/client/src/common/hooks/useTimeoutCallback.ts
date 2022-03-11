import { useCallback, useEffect, useRef } from 'react'

export function useTimeoutCallback(
  callback: () => void,
  ms = 0,
): [boolean, () => void, () => void] {
  const readyRef = useRef<boolean>(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()
  const callbackRef = useRef(callback)

  const set = useCallback(() => {
    readyRef.current = false
    timeoutRef.current && clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      readyRef.current = true
      callbackRef.current()
    }, ms)
  }, [ms])

  const clear = useCallback(() => {
    readyRef.current = false
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  // Update ref when function changes
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  // Set on mount, clear on unmount
  useEffect(() => {
    set()
    return clear
  }, [clear, ms, set])

  return [readyRef.current, clear, set]
}
