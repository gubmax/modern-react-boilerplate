import { useEffect, useRef } from 'react'

export const useUnmount = <T extends () => void>(fn: T): void => {
  const fnRef = useRef(fn)

  fnRef.current = fn

  useEffect(() => () => fnRef.current(), [])
}
