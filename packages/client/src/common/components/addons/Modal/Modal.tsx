import { FC, KeyboardEventHandler, MouseEventHandler, RefCallback, useMemo, useRef } from 'react'

import { CloseIcon } from 'client/src/common/components/icons'
import { ButtonVariants } from 'client/src/common/components/inputs/buttons/BaseButton'
import { RoundedButton } from 'client/src/common/components/inputs/buttons/RoundedButton'
import { cn } from 'client/src/common/helpers/classNames'
import { noop } from 'client/src/common/helpers/noop'
import { useEvent } from 'client/src/common/hooks/useEvent'
import { useFadeTransition } from 'client/src/common/hooks/useFadeTransition'
import { useFocusTrap } from 'client/src/common/hooks/useFocusTrap'
import { useIsomorphicLayoutEffect } from 'client/src/common/hooks/useIsomorphicLayoutEffect'
import { useUnmount } from 'client/src/common/hooks/useUnmount'
import { Portal } from '../Portal'
import { SELECTOR_CONTENT } from './Modal.constants'
import { ModalProps, ModalTransitionProps } from './Modal.types'
import * as s from './Modal.css'

function toggleStyle(active: boolean) {
  const { scrollTop, scrollLeft } = document.documentElement
  const contentEls = document.getElementsByClassName(SELECTOR_CONTENT)

  for (const el of contentEls) {
    const htmlEl = el as HTMLElement
    htmlEl.classList.toggle(s.content, active)
    htmlEl.style.top = active ? `-${scrollTop}px` : ''
    htmlEl.style.left = active ? `-${scrollLeft}px` : ''
  }

  document.body.classList.toggle(s.noScroll, active)
}

const Modal: FC<ModalProps> = ({
  children,
  autoFocus = true,
  bgFadeProps,
  wrapperFadeProps,
  onClose = noop,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useFocusTrap(wrapperRef)

  const backgroundRef: RefCallback<HTMLDivElement> = (node) => {
    if (node) {
      autoFocus && node.focus()
      node.tabIndex = -1
    }
  }

  const handleKeyDown = useEvent<KeyboardEventHandler<HTMLDivElement>>((event) => {
    if (event.key === 'Escape') {
      event.stopPropagation()
      onClose()
    }
  })

  const handleClickInsideModal = useEvent<MouseEventHandler<HTMLDivElement>>((event) =>
    event.stopPropagation(),
  )

  return (
    <div
      ref={backgroundRef}
      className={cn(s.background, s.animationBase, bgFadeProps.className)}
      tabIndex={0}
      onClick={onClose}
      onKeyDown={handleKeyDown}
      onAnimationEnd={bgFadeProps.onAnimationEnd}
    >
      <div
        ref={wrapperRef}
        className={cn(s.wrapper, s.animationBase, wrapperFadeProps.className)}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={handleClickInsideModal}
        onAnimationEnd={wrapperFadeProps.onAnimationEnd}
      >
        <div className={s.header}>
          <RoundedButton variant={ButtonVariants.FLAT} className={s.closeButton} onClick={onClose}>
            <CloseIcon />
          </RoundedButton>
        </div>
        <div className={s.body}>{children}</div>
      </div>
    </div>
  )
}

const ModalTransition: FC<ModalTransitionProps> = ({ active = false, ...rest }) => {
  const wrapperFadeTransitionOptions = useMemo(() => ({ fadeIn: s.animateWrapper }), [])
  const [wrapperFadeProps, , setVisible] = useFadeTransition(active, wrapperFadeTransitionOptions)

  const bgFadeTransitionOptions = useMemo(() => ({ fadeIn: s.animateBg }), [])
  const [bgFadeProps, isVisible, setBgVisible] = useFadeTransition(active, bgFadeTransitionOptions)

  useIsomorphicLayoutEffect(() => {
    setVisible(active)
    setBgVisible(active)
  }, [active, setBgVisible, setVisible])

  useIsomorphicLayoutEffect(() => {
    if (active) {
      toggleStyle(true)
    } else {
      const [contentEl] = document.getElementsByClassName(SELECTOR_CONTENT)
      const htmlEl = contentEl as HTMLElement | undefined
      const top = Math.abs(parseInt(htmlEl?.style.top ?? '0'))
      const left = Math.abs(parseInt(htmlEl?.style.left ?? '0'))

      toggleStyle(false)

      window.scrollTo(left, top)
    }
  }, [active])

  useUnmount(() => toggleStyle(false))

  return (
    <Portal disabled={!isVisible}>
      <Modal {...rest} bgFadeProps={bgFadeProps} wrapperFadeProps={wrapperFadeProps} />
    </Portal>
  )
}

export default ModalTransition
