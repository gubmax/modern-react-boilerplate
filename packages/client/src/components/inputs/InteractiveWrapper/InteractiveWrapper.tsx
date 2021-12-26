import { FC } from 'react'

import { cn } from 'client/src/common/helpers'
import { Wrapper } from 'client/src/components/surfaces'
import { focusStyle } from 'client/src/common/styles'
import { InteractiveWrapperProps } from './InteractiveWrapper.types'
import * as s from './InteractiveWrapper.css'

const InteractiveWrapper: FC<InteractiveWrapperProps> = ({
  active,
  children,
  className,
  ...rest
}) => {
  return (
    <Wrapper
      className={cn(focusStyle, s.wrapper, active && s.active, className)}
      role="link"
      tabIndex={0}
      {...rest}
    >
      {children}
    </Wrapper>
  )
}

export default InteractiveWrapper
