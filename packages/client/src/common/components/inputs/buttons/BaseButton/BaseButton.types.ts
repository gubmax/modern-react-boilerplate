import { MouseEvent } from 'react'

import { AsProp, StyledProps } from 'client/src/common/typings'
import { ButtonVariants } from './BaseButton.constants'

export interface BaseButtonProps extends StyledProps, AsProp<'button' | 'a'> {
  variant?: ButtonVariants
  onClick?: <T extends MouseEvent>(event: T) => void
}
