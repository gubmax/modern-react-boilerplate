import { MouseEventHandler } from 'react'

import { AsProp, ChildrenProp, StyledProps } from 'client/src/common/typings'

export interface InteractiveWrapperProps extends ChildrenProp, StyledProps, AsProp<'div' | 'li'> {
  active?: boolean
  onClick: MouseEventHandler<HTMLDivElement & HTMLLIElement>
}
