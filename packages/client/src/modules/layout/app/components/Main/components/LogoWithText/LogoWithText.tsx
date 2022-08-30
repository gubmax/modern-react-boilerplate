import { FC, memo } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { Link } from 'client/src/common/components/addons/Link'
import { Logo } from 'client/src/common/components/elements/Logo'
import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import * as s from './LogoWithText.css'

const LogoWithText: FC<StyledProps> = ({ className, style }) => {
  return (
    <Link to={PageRoutes.ROOT} className={cn(s.text, className)} style={style}>
      <Logo />
      <span className={s.title}>Boilerplate</span>
    </Link>
  )
}

export default memo(LogoWithText)
