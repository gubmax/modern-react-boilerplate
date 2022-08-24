import { FC, memo } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import * as s from './Logo.css'

const Logo: FC<StyledProps> = ({ className, style }) => {
  return (
    <div className={cn(s.text, className)} style={style}>
      <span className={s.highlight}>UI</span>
      <span className={s.title}>Boilerplate</span>
    </div>
  )
}

export default memo(Logo)
