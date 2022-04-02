import { VFC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import { PageRoutes } from 'client/src/browser/http/constants'
import { SearchField } from 'client/src/components/layout/SearchField'
import { NavigationMenu } from 'client/src/components/composites/NavigationMenu'
import { GlassWrapper } from 'client/src/components/surfaces/Wrapper'
import { Link } from 'client/src/components/auxiliary/Link'
import { Logo } from 'client/src/components/elements/Logo'
import { A } from 'client/src/components/typography/Anchor'
import { LINK_REPO } from './Header.constants'
import * as s from './Header.css'

const Header: VFC<StyledProps> = ({ className, ...rest }) => {
  return (
    <GlassWrapper className={cn(s.wrapper, className)} {...rest}>
      <Link className={s.linkLogo} to={PageRoutes.ROOT}>
        <Logo />
      </Link>
      <A href={LINK_REPO} className={s.linkRepo} target="_blank" rel="noreferrer noopener">
        GitHub
      </A>
      <SearchField className={s.search} />
      <NavigationMenu className={s.navigationMenu} />
    </GlassWrapper>
  )
}

export default Header
