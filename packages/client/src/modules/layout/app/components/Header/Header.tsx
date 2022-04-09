import { VFC } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { Link } from 'client/src/common/components/addons/Link'
import { NavigationMenu } from 'client/src/common/components/composites/NavigationMenu'
import { Logo } from 'client/src/common/components/elements/Logo'
import { A } from 'client/src/common/components/typography/Anchor'
import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import { SearchField } from 'client/src/modules/layout/app/components/SearchField'
import { LINK_REPO } from './Header.constants'
import * as s from './Header.css'

const Header: VFC<StyledProps> = ({ className, ...rest }) => {
  return (
    <div className={cn(s.wrapper, className)} {...rest}>
      <Link className={s.linkLogo} to={PageRoutes.ROOT}>
        <Logo />
      </Link>
      <A href={LINK_REPO} className={s.linkRepo} target="_blank" rel="noreferrer noopener">
        GitHub
      </A>
      <SearchField className={s.search} />
      <NavigationMenu className={s.navigationMenu} />
    </div>
  )
}

export default Header
