import { VFC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { GlassWrapper } from 'client/src/components/surfaces/Wrapper'
import { Link } from 'client/src/components/auxiliary/Link'
import { Logo } from 'client/src/components/elements/Logo'
import { UserAvatar } from 'client/src/components/elements/UserAvatar'
import { A } from 'client/src/components/typography/Anchor'
import { PageRoutes } from 'client/src/browser/http/constants'
import { StyledProps } from 'client/src/common/typings'
import { LINK_REPO } from './Header.constants'
import * as s from './Header.css'

const Header: VFC<StyledProps> = ({ className, ...rest }) => {
  return (
    <GlassWrapper className={cn(s.wrapper, className)} {...rest}>
      <Link to={PageRoutes.ROOT}>
        <Logo />
      </Link>
      <A href={LINK_REPO} className={s.marginLeft} target="_blank" rel="noreferrer noopener">
        GitHub
      </A>
      <UserAvatar />
    </GlassWrapper>
  )
}

export default Header
