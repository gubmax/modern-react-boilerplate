import { FC, memo } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { Logo } from 'client/src/common/components/elements/Logo'
import { cn } from 'client/src/common/helpers/classNames'
import { useLink } from 'client/src/common/hooks/useLink'
import { StyledProps } from 'client/src/common/typings'
import { NavigationMenu } from 'client/src/modules/layout/app/components/NavigationMenu'
import { SearchField } from 'client/src/modules/layout/app/components/SearchField'
import * as s from './HeaderDesktop.css'

const Header: FC<StyledProps> = ({ className, ...rest }) => {
  const navigateToRoot = useLink(PageRoutes.ROOT)

  return (
    <div className={cn(s.wrapper, className)} {...rest}>
      <div className={s.bar}>
        <Logo onClick={navigateToRoot} />
        <SearchField className={s.search} />
        <NavigationMenu className={s.navigationMenu} />
      </div>
    </div>
  )
}

export default memo(Header)
