import { ElementType } from 'react'

import { IconProps } from 'client/src/common/hocs/withIcon'
import { PageRoutes } from 'client/src/infra/http/constants'
import { InfoIcon, SettingsIcon, ShoppingCardIcon } from 'client/src/components/icons'

export const ROUTES: Array<{
  to: PageRoutes
  icon: ElementType<IconProps>
  text: string
}> = [
  { to: PageRoutes.ROOT, icon: InfoIcon, text: 'About' },
  { to: PageRoutes.CART, icon: ShoppingCardIcon, text: 'Shopping Cart' },
  { to: PageRoutes.SETTINGS, icon: SettingsIcon, text: 'Settings' },
]
