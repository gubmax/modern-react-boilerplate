import { FC } from 'react'

import { cn } from 'src/common/helpers'
import { UserAvatar } from 'src/components/elements/UserAvatar'
import { H2, A } from 'src/components/typography'
import { StyledProps } from 'src/types'
import { LINK_REPO } from './Header.constants'
import * as s from './Header.css'

const Header: FC<StyledProps> = ({ className, ...rest }) => {
  return (
    <div className={cn(s.wrapper, className)} {...rest}>
      <H2 className={s.logoWrapper}>🌀 Modern React Boilerplate</H2>
      <A href={LINK_REPO} className={s.marginLeft} target="_blank" rel="noreferrer noopener">
        GitHub
      </A>
      <UserAvatar />
    </div>
  )
}

export default Header
