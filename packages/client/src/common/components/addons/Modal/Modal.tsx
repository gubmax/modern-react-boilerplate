import {
  FC,
  KeyboardEventHandler,
  MouseEventHandler,
  RefCallback,
  useCallback,
  useEffect,
  useRef,
} from 'react'

import { CloseIcon } from 'client/src/common/components/icons'
import { ButtonVariants } from 'client/src/common/components/inputs/buttons/BaseButton'
import { RoundedButton } from 'client/src/common/components/inputs/buttons/RoundedButton'
import { cn } from 'client/src/common/helpers/classNames'
import { noop } from 'client/src/common/helpers/noop'
import { useFadeTransition } from 'client/src/common/hooks/useFadeTransition'
import { Portal } from '../Portal'
import { ModalProps } from './Modal.types'
import * as s from './Modal.css'

function toggleBodyStyles(active: boolean, positionTop: number): void {
  const {
    body: { style, classList },
  } = document

  style.top = active ? `-${positionTop}px` : ''
  classList.toggle(s.noScroll, active)
}

const Modal: FC<ModalProps> = ({ children, active = false, onClose = noop }) => {
  const positionTopRef = useRef(0)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [fadeWrapperProps, , setVisible] = useFadeTransition(active, { fadeIn: s.animateWrapper })
  const [fadeBgProps, isVisible, setBgVisible] = useFadeTransition(active, { fadeIn: s.animateBg })

  useEffect(() => {
    setVisible(active)
    setBgVisible(active)
  }, [active, setBgVisible, setVisible])

  useEffect(() => {
    const { scrollLeft, scrollTop } = document.documentElement

    active && (positionTopRef.current = scrollTop)
    toggleBodyStyles(active, positionTopRef.current)
    !active && window.scrollTo(scrollLeft, positionTopRef.current)
  }, [active])

  useEffect(() => () => toggleBodyStyles(false, 0), [])

  const backgroundRef: RefCallback<HTMLDivElement> = (node) => {
    if (node) {
      node.focus()
      node.tabIndex = -1
    }
  }

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Escape') {
      event.stopPropagation()
      onClose()
    }
  }

  const handleClickInsideModal = useCallback<MouseEventHandler<HTMLDivElement>>(
    (event) => event.stopPropagation(),
    [],
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
