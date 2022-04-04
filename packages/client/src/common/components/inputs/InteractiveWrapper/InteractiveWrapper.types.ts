import { MouseEventHandler } from 'react'

import { AsProp, StyledProps } from 'client/src/common/typings'

export interface InteractiveWrapperProps extends StyledProps, AsProp<'div' | 'li'> {
  active?: boolean
  onClick: MouseEventHandler<HTMLDivElement & HTMLLIElement>
}
