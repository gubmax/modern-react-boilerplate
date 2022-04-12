import { FC } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { Link } from 'client/src/common/components/addons/Link'
import { NavigationMenu } from 'client/src/common/components/composites/NavigationMenu'
import { Logo } from 'client/src/common/components/elements/Logo'
import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import { SearchField } from 'client/src/modules/layout/app/components/SearchField'
import * as s from './HeaderTouch.css'

const Header: FC<StyledProps> = ({ className, ...rest }) => {
  return (
    <>
      <div className={cn(s.wrapper, className)} {...rest}>
        <Link to={PageRoutes.ROOT}>
          <Logo />
        </Link>
        <NavigationMenu className={s.navigationMenu} />
      </div>
      <SearchField className={s.search} />
    </>
  )
}

export default Header
