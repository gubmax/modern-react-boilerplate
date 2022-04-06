import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { focusStyle } from 'client/src/common/styles/shared/focusStyle.css'
import { ButtonVariants } from './BaseButton.constants'
import { BaseButtonProps } from './BaseButton.types'
import * as s from './BaseButton.css'

const BaseButton: FC<BaseButtonProps> = ({
  as: Tag = 'button',
  variant = ButtonVariants.DEFAULT,
  className,
  ...rest
}) => {
  return (
    <Tag
      className={cn(s.baseButton, s.buttonVariants[variant], focusStyle, className)}
      tabIndex={Tag === 'a' ? 0 : undefined}
      {...rest}
    />
  )
}

export default BaseButton
