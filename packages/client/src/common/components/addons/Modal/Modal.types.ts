import { ChildrenProp } from 'client/src/common/typings'

export interface ModalProps extends ChildrenProp {
  active?: boolean
  onClose?: () => void
}
