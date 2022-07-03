import { FC } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import { Link } from '../../addons/Link'
import * as s from './Logo.css'

const Logo: FC<StyledProps> = ({ className, style }) => {
  return (
    <Link className={cn(s.text, className)} style={style} to={PageRoutes.ROOT}>
      <span className={s.highlight}>UI</span>
      <span className={s.title}>Boilerplate</span>
    </Link>
  )
}

export default Logo
