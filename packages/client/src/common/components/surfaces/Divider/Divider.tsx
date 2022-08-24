import { FC, memo } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import * as s from './Divider.css'

const Divider: FC<StyledProps> = ({ className, style }) => {
  return <hr className={cn(s.divider, className)} style={style} />
}

export default memo(Divider)
