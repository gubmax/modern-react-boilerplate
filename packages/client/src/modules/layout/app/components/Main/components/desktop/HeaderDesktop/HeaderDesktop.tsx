import { FC } from 'react'

import { NavigationMenu } from 'client/src/common/components/composites/NavigationMenu'
import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import { SearchField } from 'client/src/modules/layout/app/components/SearchField'
import * as s from './HeaderDesktop.css'

const Header: FC<StyledProps> = ({ className, ...rest }) => {
  return (
    <div className={cn(s.wrapper, className)} {...rest}>
      <div className={s.bar}>
        <SearchField className={s.search} />
        <NavigationMenu className={s.navigationMenu} />
      </div>
    </div>
  )
}

export default Header
