import {
  FC,
  KeyboardEventHandler,
  MouseEventHandler,
  RefCallback,
  useCallback,
  useEffect,
} from 'react'

import { RoundedButton } from 'client/src/components/inputs/buttons/RoundedButton'
import { FlatWrapper } from 'client/src/components/surfaces/Wrapper'
import { noop } from 'client/src/common/helpers/noop'
import CloseIcon from '../../icons/Close.icon'
import { Portal } from '../Portal'
import { ModalProps } from './Modal.types'
import * as s from './Modal.css'

let positionTop = 0

function toggleBodyStyles(active: boolean): void {
  const {
    body: { style, classList },
    documentElement: { scrollLeft, scrollTop },
  } = document

  active && (positionTop = scrollTop)

  style.top = active ? `-${positionTop}px` : ''
  classList.toggle(s.noScroll, active)

  !active && window.scrollTo(scrollLeft, positionTop)
}

const Modal: FC<ModalProps> = ({ children, active = false, onClose = noop }) => {
  useEffect(() => {
    toggleBodyStyles(active)

    return () => {
      toggleBodyStyles(false)
    }
  }, [active])

  const backgroundRef: RefCallback<HTMLDivElement> = (node) => {
    if (node !== null) {
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
    <Portal disabled={!active}>
      <div
        ref={backgroundRef}
        className={s.background}
        tabIndex={0}
        onClick={onClose}
        onKeyDown={handleKeyDown}
      >
        <FlatWrapper
          className={s.wrapper}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onClick={handleClickInsideModal}
        >
          <div className={s.header}>
            <RoundedButton className={s.closeButton} onClick={onClose}>
              <CloseIcon active />
            </RoundedButton>
          </div>
          <div className={s.body}>{children}</div>
        </FlatWrapper>
      </div>
    </Portal>
  )
}

export default Modal
