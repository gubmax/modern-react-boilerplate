import { RefObject, useEffect } from 'react'

const SELECTOR_FOCUSABLE_ELEMENTS =
  'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'

function trapFocus(
  event: KeyboardEvent,
  firstFocusableEl: HTMLElement | null,
  lastFocusableEl: HTMLElement | null,
) {
  if (event.key !== 'Tab') return

  // shift + tab
  if (event.shiftKey) {
    if (document.activeElement === firstFocusableEl) {
      lastFocusableEl?.focus()
      event.preventDefault()
    }
  }
  //tab
  else if (document.activeElement === lastFocusableEl) {
    firstFocusableEl?.focus()
    event.preventDefault()
  }
}

export function useFocusTrap(elRef: RefObject<HTMLElement>): void {
  useEffect(() => {
    const el = elRef.current
    const focusableEls = el?.querySelectorAll<HTMLElement>(SELECTOR_FOCUSABLE_ELEMENTS)

    if (!focusableEls) return

    const firstFocusableEl = focusableEls[0]
    const lastFocusableEl = focusableEls[focusableEls.length - 1]
    const handleKeydown = (event: KeyboardEvent) =>
      trapFocus(event, firstFocusableEl, lastFocusableEl)

    el?.addEventListener('keydown', handleKeydown)

    return () => {
      el?.removeEventListener('keydown', handleKeydown)
    }
  }, [elRef])
}
