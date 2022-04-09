import { useEffect, useState } from 'react'

import { WindowResizeObserverModel } from '../models/WindowResizeObserver.model'
import { useInject } from './useInject'

function matchMedia(query: string): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia(query).matches
}

export const useMedia = (query: string): boolean => {
  const [value, setValue] = useState(matchMedia(query))
  const { resize$ } = useInject(WindowResizeObserverModel)

  useEffect(() => {
    const subscription = resize$.subscribe(() => {
      const matches = matchMedia(query)

      if (matches !== value) {
        setValue(matches)
      }
    })

    return () => subscription.unsubscribe()
  }, [query, resize$, value])

  return value
}
