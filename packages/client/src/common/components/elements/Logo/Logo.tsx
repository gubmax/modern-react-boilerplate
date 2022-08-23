import { FC } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { cn } from 'client/src/common/helpers/classNames'
import { noop } from 'client/src/common/helpers/noop'
import { LogoProps } from './Logo.types'
import * as s from './Logo.css'

const Logo: FC<LogoProps> = ({ className, style, onClick = noop }) => {
  return (
    <a className={cn(s.text, className)} style={style} href={PageRoutes.ROOT} onClick={onClick}>
      <span className={s.highlight}>UI</span>
      <span className={s.title}>Boilerplate</span>
    </a>
  )
}

export default Logo
