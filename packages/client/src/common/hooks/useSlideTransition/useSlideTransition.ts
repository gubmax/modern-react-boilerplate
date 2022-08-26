import { MutableRefObject, useCallback, useRef } from 'react'

import { invariant } from 'client/src/common/helpers/invariant'
import { TRANSITON_DELAY_MS } from './useSlideTransition.constants'
import * as s from './useSlideTransition.css'

export function useSlideTransition(
  wrapperRef: MutableRefObject<HTMLDivElement | null>,
  innerRef: MutableRefObject<HTMLDivElement | null>,
) {
  const transitionRef = useRef(false)

  const runTransition = useCallback(
    (reverse = false) => {
      const wrapperEl = wrapperRef.current
      const innerEl = innerRef.current
      const transition = transitionRef.current

      if (transition) return

      invariant(wrapperEl !== null && innerEl !== null)

      const { offsetWidth } = wrapperEl
      let offset = reverse ? -offsetWidth : offsetWidth

      if (!reverse && wrapperEl.scrollWidth - wrapperEl.scrollLeft - offset - offsetWidth <= 0) {
        offset = wrapperEl.scrollWidth - wrapperEl.clientWidth - wrapperEl.scrollLeft
      } else if (reverse && wrapperEl.scrollLeft + offset <= 0) {
        offset = -wrapperEl.scrollLeft
      }

      if (offset === 0) return

      transitionRef.current = true
      innerEl.classList.add(s.transition)
      innerEl.style.transform = `translate3d(${innerEl.scrollLeft - offset}px, 0, 0)`

      setTimeout(() => {
        transitionRef.current = false
        innerEl.classList.remove(s.transition)
        innerEl.style.transform = 'unset'
        wrapperEl.scrollLeft += offset
      }, TRANSITON_DELAY_MS)
    },
    [innerRef, wrapperRef],
  )

  return runTransition
}
