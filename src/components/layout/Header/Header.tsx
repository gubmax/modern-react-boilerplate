import { FC } from 'react'

import { cn } from 'src/common/helpers'
import { Link } from 'src/components/auxiliary'
import { Logo, UserAvatar } from 'src/components/elements'
import { A } from 'src/components/typography'
import { PageRoutes } from 'src/infra/http'
import { StyledProps } from 'src/types'
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
