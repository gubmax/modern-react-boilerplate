import { FC } from 'react'

import { cn } from 'src/helpers'
import { Wrapper } from 'src/components/surfaces'
import { rippleEffect } from 'src/styles/rippleEffect.css'
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
      className={cn(rippleEffect, s.wrapper, active && s.active, className)}
      role="link"
      tabIndex={0}
      {...rest}
    >
      {children}
    </Wrapper>
  )
}

export default InteractiveWrapper
