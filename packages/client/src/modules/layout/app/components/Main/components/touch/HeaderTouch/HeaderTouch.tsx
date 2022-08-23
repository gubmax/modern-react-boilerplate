import { FC, memo } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { Logo } from 'client/src/common/components/elements/Logo'
import { cn } from 'client/src/common/helpers/classNames'
import { useLink } from 'client/src/common/hooks/useLink'
import { StyledProps } from 'client/src/common/typings'
import { NavigationMenu } from 'client/src/modules/layout/app/components/NavigationMenu'
import { SearchField } from 'client/src/modules/layout/app/components/SearchField'
import * as s from './HeaderTouch.css'

const Header: FC<StyledProps> = ({ className, ...rest }) => {
  const navigateToRoot = useLink(PageRoutes.ROOT)

  return (
    <div className={cn(s.wrapper, className)} {...rest}>
      <div className={s.header}>
        <Logo onClick={navigateToRoot} />
        <NavigationMenu className={s.navigationMenu} />
      </div>
      <SearchField />
    </div>
  )
}

export default memo(Header)
