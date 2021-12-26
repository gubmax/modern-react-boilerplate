import { MouseEvent } from 'react'

import { AsProp, StyledProps } from 'client/src/common/typings'

export interface BaseButtonProps extends StyledProps, AsProp<'button' | 'a'> {
  primary?: boolean
  onClick?: <T extends MouseEvent>(event: T) => void
}
