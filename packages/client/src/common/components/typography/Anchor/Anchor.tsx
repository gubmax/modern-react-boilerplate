import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { AnchorProps } from './Anchor.types'
import { link } from './Anchor.css'

const Anchor: FC<AnchorProps> = ({ className, innerRef, ...rest }) => {
  return <a className={cn(link, className)} ref={innerRef} {...rest} />
}

export default Anchor
