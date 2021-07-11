import { FC } from 'react'

import { cn } from 'src/helpers'
import { StyledProps } from 'src/types'
import * as s from './Divider.css'

const Divider: FC<StyledProps> = ({ className, ...rest }) => {
  return <hr className={cn(s.divider, className)} {...rest} />
}

export default Divider
