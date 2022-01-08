import { useState, useEffect } from 'react'
import { debounce, fromEvent, interval } from 'rxjs'

const THROTTLE_TIME = 250

function matchMedia(query: string): boolean {
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches
  }

  return false
}

export const useMedia = (query: string): boolean => {
  const [value, setValue] = useState(matchMedia(query))

  useEffect(() => {
    const resize$ = fromEvent(window, 'resize')
      .pipe(debounce(() => interval(THROTTLE_TIME)))
      .subscribe(() => {
        const matches = matchMedia(query)

        if (matches !== value) {
          setValue(matches)
        }
      })

    return () => resize$.unsubscribe()
  }, [query, value])

  return value
}
