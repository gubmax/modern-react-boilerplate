import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { dt } from 'client/src/common/styles/designTokens'
import { InteractiveWrapperProps } from './InteractiveWrapper.types'
import * as s from './InteractiveWrapper.css'

const InteractiveWrapper: FC<InteractiveWrapperProps> = ({
  as: Tag = 'div',
  active,
  children,
  className,
  ...rest
}) => {
  return (
    <Tag
      className={cn(dt.style.focus.regular, s.wrapper, active && s.active, className)}
      role="link"
      tabIndex={0}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default InteractiveWrapper
