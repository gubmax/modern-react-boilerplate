import { MouseEventHandler } from 'react'

import { ChildrenProp, StyledProps } from 'client/src/common/typings'

export interface NavigationIconProps extends ChildrenProp, StyledProps {
  text: string
  onClick: MouseEventHandler<HTMLDivElement>
}
