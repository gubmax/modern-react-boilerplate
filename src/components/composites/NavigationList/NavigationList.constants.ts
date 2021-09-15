import { ElementType } from 'react'

import { IconProps } from 'src/common/hocs'
import { PageRoutes } from 'src/infra/http'
import { InfoIcon, SettingsIcon, ShoppingCardIcon } from 'src/components/icons'

export const ROUTES: Array<{
  to: PageRoutes
  icon: ElementType<IconProps>
  text: string
}> = [
  { to: PageRoutes.ROOT, icon: InfoIcon, text: 'About' },
  { to: PageRoutes.CART, icon: ShoppingCardIcon, text: 'Shopping Cart' },
  { to: PageRoutes.SETTINGS, icon: SettingsIcon, text: 'Settings' },
]
