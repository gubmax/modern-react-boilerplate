import { KeyboardEventHandler, MouseEventHandler } from 'react'

import { AsProp, ChildrenProp, StyledProps } from 'client/src/common/typings'
import { ButtonVariants } from './BaseButton.constants'

export interface BaseButtonProps extends ChildrenProp, StyledProps, AsProp<'button' | 'a'> {
  innerClassName?: string
  variant?: ButtonVariants
  href?: string
  onClick?: MouseEventHandler
  onKeyPress?: KeyboardEventHandler
}
