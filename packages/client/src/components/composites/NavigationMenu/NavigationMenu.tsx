import { VFC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { PageRoutes } from 'client/src/browser/http/constants'
import { noop } from 'client/src/common/helpers/noop'
import { cn } from 'client/src/common/helpers/classNames'
import { useToggle } from 'client/src/common/hooks/useToggle'
import { StyledProps } from 'client/src/common/typings'
import { ShoppingCardIcon, NotificationIcon, UserIcon } from 'client/src/components/icons'
import { NavigationIcon } from 'client/src/components/elements/NavigationIcon'
import { Modal } from 'client/src/components/auxiliary/Modal'
import * as s from './NavigationMenu.css'

const NavigationMenu: VFC<StyledProps> = ({ className, style }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [shown, toggleShown] = useToggle()

  return (
    <div className={cn(s.wrapper, className)} style={style}>
      <NavigationIcon
        className={s.icon}
        onClick={() => navigate(PageRoutes.CART)}
        text="Shopping cart"
      >
        <ShoppingCardIcon active={pathname === PageRoutes.CART} />
      </NavigationIcon>
      <NavigationIcon className={s.icon} text="Notifications" onClick={noop}>
        <NotificationIcon />
      </NavigationIcon>
      <NavigationIcon className={s.icon} text="Sign in" onClick={toggleShown}>
        <UserIcon />
      </NavigationIcon>
      <Modal active={shown} onClose={toggleShown}>
        The quick brown fox jumps over the lazy dog.
      </Modal>
    </div>
  )
}

export default NavigationMenu
