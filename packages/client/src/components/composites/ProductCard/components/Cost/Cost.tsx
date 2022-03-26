import { FC } from 'react'

import { StyledProps } from 'client/src/common/typings'
import { Wrapper } from 'client/src/components/surfaces/Wrapper'
import { cn } from 'client/src/common/helpers/classNames'
import * as s from './Cost.css'

const Cost: FC<StyledProps> = ({ className, style, children }) => {
  return (
    <Wrapper className={cn(s.wrapper, className)} style={style}>
      <span className={s.count}>{children}</span> ETH
    </Wrapper>
  )
}

export default Cost
