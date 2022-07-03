import { FC, memo, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

import { PageRoutes } from 'client/src/browser/http/constants'
import { NavigationIcon } from 'client/src/common/components/elements/NavigationIcon'
import { NotificationIcon, ShoppingCardIcon, UserIcon } from 'client/src/common/components/icons'
import { cn } from 'client/src/common/helpers/classNames'
import { IconVariants } from 'client/src/common/hocs/withIcon'
import { useComponentVariant } from 'client/src/common/hooks/useComponentVariant'
import { useLink } from 'client/src/common/hooks/useLink'
import { StyledProps } from 'client/src/common/typings'
import { RoundedButton } from '../../inputs/buttons/RoundedButton'
import * as s from './NavigationMenu.css'

const NavigationMenu: FC<StyledProps> = ({ className, style }) => {
  const { pathname } = useLocation()
  const IconComponent = useComponentVariant(RoundedButton, NavigationIcon)
  const navigateToCartPage = useLink(PageRoutes.CART)
  const navigateToSignInPage = useLink(PageRoutes.SIGN_IN, { background: true })

  const getIconVariant = useCallback(
    (route: PageRoutes) => (pathname === route ? IconVariants.ACTIVE : IconVariants.SECONDARY),
    [pathname],
  )

  return (
    <div className={cn(s.wrapper, className)} style={style}>
      <IconComponent
        className={cn(s.icon, pathname === PageRoutes.CART && s.iconActive)}
        onClick={navigateToCartPage}
        onKeyPress={navigateToCartPage}
        text="Shopping cart"
      >
        <ShoppingCardIcon variant={getIconVariant(PageRoutes.CART)} />
      </IconComponent>
      <IconComponent className={s.icon} text="Notifications">
        <NotificationIcon variant={IconVariants.SECONDARY} />
      </IconComponent>
      <IconComponent
        text="Sign in"
        className={s.icon}
        onClick={navigateToSignInPage}
        onKeyPress={navigateToSignInPage}
      >
        <UserIcon variant={getIconVariant(PageRoutes.SIGN_IN)} />
      </IconComponent>
    </div>
  )
}

export default memo(NavigationMenu)
