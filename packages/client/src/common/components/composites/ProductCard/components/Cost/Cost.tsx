import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import * as s from './Cost.css'

const Cost: FC<StyledProps> = ({ className, style, children }) => {
  return (
    <div className={cn(s.wrapper, className)} style={style}>
      <span className={s.count}>{children}</span> ETH
    </div>
  )
}

export default Cost
