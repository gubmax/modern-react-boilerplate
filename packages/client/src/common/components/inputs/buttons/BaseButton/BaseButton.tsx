import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { ButtonVariants } from './BaseButton.constants'
import { BaseButtonProps } from './BaseButton.types'
import * as s from './BaseButton.css'

const BaseButton: FC<BaseButtonProps> = ({
  as: Tag = 'button',
  variant = ButtonVariants.DEFAULT,
  className,
  innerClassName,
  style,
  ...rest
}) => {
  return (
    <div className={className} style={style}>
      <Tag
        className={cn(s.baseButton, s.buttonVariants[variant], innerClassName)}
        tabIndex={Tag === 'a' ? 0 : undefined}
        {...rest}
      />
    </div>
  )
}

export default BaseButton
