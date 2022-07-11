import { FadeProps } from 'client/src/common/hooks/useFadeTransition'
import { ChildrenProp } from 'client/src/common/typings'

export interface ModalProps extends ChildrenProp {
  bgFadeProps: FadeProps
  wrapperFadeProps: FadeProps
  autoFocus?: boolean
  onClose?: () => void
}

export interface ModalTransitionProps extends Omit<ModalProps, 'bgFadeProps' | 'wrapperFadeProps'> {
  active?: boolean
}
