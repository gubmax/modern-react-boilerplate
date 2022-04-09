import { ChildrenProp } from 'client/src/common/typings'

export interface PortalProps extends ChildrenProp {
  container?: Element
  disabled?: boolean
}
