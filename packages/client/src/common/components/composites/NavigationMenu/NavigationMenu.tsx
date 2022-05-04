import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { PageRoutes } from 'client/src/browser/http/constants'
import { Link } from 'client/src/common/components/addons/Link'
import { NavigationIcon } from 'client/src/common/components/elements/NavigationIcon'
import { NotificationIcon, ShoppingCardIcon, UserIcon } from 'client/src/common/components/icons'
import { cn } from 'client/src/common/helpers/classNames'
import { noop } from 'client/src/common/helpers/noop'
import { IconVariants } from 'client/src/common/hocs/withIcon'
import { useLink } from 'client/src/common/hooks/useLink'
import { StyledProps } from 'client/src/common/typings'
import * as s from './NavigationMenu.css'

const NavigationMenu: FC<StyledProps> = ({ className, style }) => {
  const { pathname } = useLocation()
  const navigateToCartPage = useLink(PageRoutes.CART)

  return (
    <div className={cn(s.wrapper, className)} style={style}>
      <NavigationIcon className={s.icon} onClick={navigateToCartPage} text="Shopping cart">
        <ShoppingCardIcon
          variant={pathname === PageRoutes.CART ? IconVariants.ACTIVE : undefined}
        />
      </NavigationIcon>
      <NavigationIcon className={s.icon} text="Notifications" onClick={noop}>
        <NotificationIcon variant={IconVariants.SECONDARY} />
      </NavigationIcon>
      <Link to={PageRoutes.SIGN_IN} className={s.icon} background>
        <NavigationIcon text="Sign in">
          <UserIcon />
        </NavigationIcon>
      </Link>
    </div>
  )
}

export default NavigationMenu
