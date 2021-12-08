import { FC } from 'react'

import { cn } from 'client/src/common/helpers'
import { Link } from 'client/src/components/auxiliary'
import { Logo, UserAvatar } from 'client/src/components/elements'
import { A } from 'client/src/components/typography'
import { PageRoutes } from 'client/src/infra/http'
import { StyledProps } from 'client/src/typings'
import { LINK_REPO } from './Header.constants'
import * as s from './Header.css'

const Header: FC<StyledProps> = ({ className, ...rest }) => {
  return (
    <div className={cn(s.wrapper, className)} {...rest}>
      <Link to={PageRoutes.ROOT}>
        <Logo />
      </Link>
      <A href={LINK_REPO} className={s.marginLeft} target="_blank" rel="noreferrer noopener">
        GitHub
      </A>
      <UserAvatar />
    </div>
  )
}

export default Header
