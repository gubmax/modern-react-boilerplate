import { FC, KeyboardEventHandler, MouseEventHandler, RefCallback, useRef } from 'react'

import { CloseIcon } from 'client/src/common/components/icons'
import { ButtonVariants } from 'client/src/common/components/inputs/buttons/BaseButton'
import { RoundedButton } from 'client/src/common/components/inputs/buttons/RoundedButton'
import { cn } from 'client/src/common/helpers/classNames'
import { noop } from 'client/src/common/helpers/noop'
import { useEvent } from 'client/src/common/hooks/useEvent'
import { useFadeTransition } from 'client/src/common/hooks/useFadeTransition'
import { useIsomorphicLayoutEffect } from 'client/src/common/hooks/useIsomorphicLayoutEffect'
import { useUnmount } from 'client/src/common/hooks/useUnmount'
import { Portal } from '../Portal'
import { ModalProps } from './Modal.types'
import * as s from './Modal.css'

function toggleStyle(active: boolean) {
  const { scrollTop, scrollLeft } = document.documentElement
  const contentEl = document.getElementById('main')

  if (contentEl !== null) {
    contentEl.classList.toggle(s.content, active)
    contentEl.style.top = active ? `-${scrollTop}px` : ''
    contentEl.style.left = active ? `-${scrollLeft}px` : ''
  }

  document.body.classList.toggle(s.noScroll, active)
}

const Modal: FC<ModalProps> = ({ children, active = false, onClose = noop }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [fadeWrapperProps, , setVisible] = useFadeTransition(active, { fadeIn: s.animateWrapper })
  const [fadeBgProps, isVisible, setBgVisible] = useFadeTransition(active, { fadeIn: s.animateBg })

  useIsomorphicLayoutEffect(() => {
    setVisible(active)
    setBgVisible(active)
  }, [active, setBgVisible, setVisible])

  useIsomorphicLayoutEffect(() => {
    if (active) {
      toggleStyle(true)
    } else {
      const contentEl = document.getElementById('main')
      const top = Math.abs(parseInt(contentEl?.style.top ?? '0'))
      const left = Math.abs(parseInt(contentEl?.style.left ?? '0'))

      toggleStyle(false)

      window.scrollTo(left, top)
    }
  }, [active])

  useUnmount(() => toggleStyle(false))

  const backgroundRef: RefCallback<HTMLDivElement> = (node) => {
    if (node) {
      node.focus()
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
    <Portal disabled={!isVisible}>
      <div
        ref={backgroundRef}
        className={cn(s.background, s.animationBase, fadeBgProps.className)}
        tabIndex={0}
        onClick={onClose}
        onKeyDown={handleKeyDown}
        onAnimationEnd={fadeBgProps.onAnimationEnd}
      >
        <div
          ref={wrapperRef}
          className={cn(s.wrapper, s.animationBase, fadeWrapperProps.className)}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onClick={handleClickInsideModal}
          onAnimationEnd={fadeWrapperProps.onAnimationEnd}
        >
          <div className={s.header}>
            <RoundedButton
              variant={ButtonVariants.FLAT}
              className={s.closeButton}
              onClick={onClose}
            >
              <CloseIcon />
            </RoundedButton>
          </div>
          <div className={s.body}>{children}</div>
        </div>
      </div>
    </Portal>
  )
}

export default Modal
