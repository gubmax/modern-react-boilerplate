import { useState, useEffect } from 'react'
import { WindowResizeObserverModel } from '../models/WindowResizeObserver.model'
import { useInject } from './useInject'

function matchMedia(query: string): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia(query).matches
}

export const useMedia = (query: string): boolean => {
  const [value, setValue] = useState(matchMedia(query))
  const windowResizeObserverModel = useInject(WindowResizeObserverModel)

  useEffect(() => {
    const unsubscribe = windowResizeObserverModel.subscribe(() => {
      const matches = matchMedia(query)

      if (matches !== value) {
        setValue(matches)
      }
    })

    return () => unsubscribe()
  }, [query, value, windowResizeObserverModel])

  return value
}
