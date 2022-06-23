import { FC } from 'react'
import { Link } from 'react-router-dom'

import { PageRoutes } from 'client/src/browser/http/constants'
import { NavigationMenu } from 'client/src/common/components/composites/NavigationMenu'
import { Logo } from 'client/src/common/components/elements/Logo'
import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import { SearchField } from 'client/src/modules/layout/app/components/SearchField'
import * as s from './HeaderDesktop.css'

const Header: FC<StyledProps> = ({ className, ...rest }) => {
  return (
    <div className={cn(s.wrapper, className)} {...rest}>
      <div className={s.bar}>
        <Link to={PageRoutes.ROOT} className={s.link}>
          <Logo />
        </Link>
        <SearchField className={s.search} />
        <NavigationMenu className={s.navigationMenu} />
      </div>
    </div>
  )
}

export default Header
