import { FC, memo } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { Link } from 'client/src/common/components/addons/Link'
import { Logo } from 'client/src/common/components/elements/Logo'
import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import { NavigationMenu } from '../../NavigationMenu'
import { SearchField } from '../../SearchField'
import * as s from './HeaderDesktop.css'

const Header: FC<StyledProps> = ({ className, ...rest }) => {
  return (
    <div className={cn(s.wrapper, className)} {...rest}>
      <div className={s.bar}>
        <Link to={PageRoutes.ROOT}>
          <Logo />
        </Link>
        <SearchField className={s.search} />
        <NavigationMenu className={s.navigationMenu} />
      </div>
    </div>
  )
}

export default memo(Header)
