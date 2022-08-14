import { FC } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import * as s from './Logo.css'

const Logo: FC<StyledProps> = ({ className, style }) => {
  return (
    <a className={cn(s.text, className)} style={style} href={PageRoutes.ROOT}>
      <span className={s.highlight}>UI</span>
      <span className={s.title}>Boilerplate</span>
    </a>
  )
}

export default Logo
