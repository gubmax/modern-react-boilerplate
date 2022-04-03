import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { focusStyle } from 'client/src/common/styles'
import { BaseButtonProps } from './BaseButton.types'
import * as s from './BaseButton.css'
import { ButtonTypes } from './BaseButton.constants'

const BaseButton: FC<BaseButtonProps> = ({
  as: Tag = 'button',
  children,
  primary,
  white,
  className,
  ...rest
}) => {
  const type = primary
    ? white
      ? ButtonTypes.PRIMARY_WHITE
      : ButtonTypes.PRIMARY
    : white
    ? ButtonTypes.DEFAULT_WHITE
    : ButtonTypes.DEFAULT

  return (
    <Tag
      className={cn(s.button({ type }), focusStyle, className)}
      tabIndex={Tag === 'a' ? 0 : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default BaseButton
