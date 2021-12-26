import { FC } from 'react'

import { cn } from 'client/src/common/helpers'
import { StyledProps } from 'client/src/common/typings'
import * as s from './Divider.css'

const Divider: FC<StyledProps> = ({ className, ...rest }) => {
  return <hr className={cn(s.divider, className)} {...rest} />
}

export default Divider
