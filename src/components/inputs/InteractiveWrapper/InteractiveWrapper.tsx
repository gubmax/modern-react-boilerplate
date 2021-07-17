import { FC } from 'react'

import { cn } from 'src/helpers'
import { rippleEffect } from 'src/styles/rippleEffect.css'
import { Wrapper } from 'src/components/surfaces/Wrapper'
import { InteractiveWrapperProps } from './InteractiveWrapper.types'
import * as s from './InteractiveWrapper.css'

const InteractiveWrapper: FC<InteractiveWrapperProps> = ({ active, children, ...rest }) => {
  return (
    <Wrapper
      className={cn(rippleEffect, s.wrapper, active && s.active)}
      role="link"
      tabIndex={0}
      {...rest}
    >
      {children}
    </Wrapper>
  )
}

export default InteractiveWrapper
