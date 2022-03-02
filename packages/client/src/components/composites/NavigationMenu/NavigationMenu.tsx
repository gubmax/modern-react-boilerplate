import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { PageRoutes } from 'client/src/browser/http/constants'
import { cn } from 'client/src/common/helpers/classNames'
import { noop } from 'client/src/common/helpers/noop'
import { NavigationIcon } from '../../elements/NavigationIcon'
import { ShoppingCardIcon, NotificationIcon, UserIcon } from '../../icons'
import * as s from './NavigationMenu.css'
import { Modal } from '../../auxiliary/Modal'
import { useToggle } from 'client/src/common/hooks/useToggle'

const NavigationMenu: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [shown, toggleShown] = useToggle()

  return (
    <>
      <NavigationIcon
        className={cn(s.icon, s.marginLeft)}
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
    </>
  )
}

export default NavigationMenu
