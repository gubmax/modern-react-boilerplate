import { FC, memo } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import * as s from './Logo.css'

const Logo: FC<StyledProps> = ({ className, style }) => {
  return (
    <span className={cn(s.highlight, className)} style={style}>
      UI
    </span>
  )
}

export default memo(Logo)
