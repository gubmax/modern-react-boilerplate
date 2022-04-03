import { MouseEventHandler } from 'react'

import { StyledProps } from 'client/src/common/typings'

export interface NavigationIconProps extends StyledProps {
  text: string
  onClick: MouseEventHandler<HTMLDivElement>
}
