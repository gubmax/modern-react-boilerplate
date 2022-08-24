import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { ButtonVariants } from './BaseButton.constants'
import { BaseButtonProps } from './BaseButton.types'
import * as s from './BaseButton.css'

const BaseButton: FC<BaseButtonProps> = ({
  as: Tag = 'button',
  children,
  className,
  innerClassName,
  style,
  variant = ButtonVariants.DEFAULT,
  ...rest
}) => {
  return (
    <div className={className} style={style}>
      <Tag
        className={cn(s.baseButton, s.buttonVariants[variant], innerClassName)}
        tabIndex={Tag === 'a' ? 0 : undefined}
        {...rest}
      >
        {children}
      </Tag>
    </div>
  )
}

export default BaseButton
