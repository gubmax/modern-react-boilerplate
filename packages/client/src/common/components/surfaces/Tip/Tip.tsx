import { FC } from 'react'

import { TipIcon } from 'client/src/common/components/icons'
import { cn } from 'client/src/common/helpers/classNames'
import { IconVariants } from 'client/src/common/hocs/withIcon'
import { TipProps } from './Tip.types'
import * as s from './Tip.css'

const Tip: FC<TipProps> = ({ className, style, children }) => {
  return (
    <div className={cn(s.wrapper, className)} style={style}>
      <TipIcon className={s.icon} variant={IconVariants.ACCENT} />
      <div>{children}</div>
    </div>
  )
}

export default Tip
