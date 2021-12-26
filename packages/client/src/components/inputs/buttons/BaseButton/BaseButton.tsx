import { FC } from 'react'

import { cn } from 'client/src/common/helpers'
import { focusStyle } from 'client/src/common/styles'
import { BaseButtonProps } from './BaseButton.types'
import * as s from './BaseButton.css'
import { ButtontTypes } from './BaseButton.constants'

const BaseButton: FC<BaseButtonProps> = ({
  as: Tag = 'button',
  children,
  primary,
  className,
  ...rest
}) => {
  return (
    <Tag
      className={cn(
        s.button({ type: primary ? ButtontTypes.PRIMARY : ButtontTypes.DEFAULT }),
        focusStyle,
        className,
      )}
      {...(Tag === 'a' ? { tabIndex: 0 } : {})}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default BaseButton
