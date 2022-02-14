import { ElementType } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { IconProps } from 'client/src/common/hocs/withIcon'
import { InfoIcon, SettingsIcon, ShoppingCardIcon, ShowcaseIcon } from 'client/src/components/icons'

export const ROUTES: Array<{
  to: PageRoutes
  icon: ElementType<IconProps>
  text: string
}> = [
  { to: PageRoutes.ROOT, icon: ShowcaseIcon, text: 'Showcase' },
  { to: PageRoutes.CART, icon: ShoppingCardIcon, text: 'Shopping Cart' },
  { to: PageRoutes.ABOUT, icon: InfoIcon, text: 'About' },
  { to: PageRoutes.SETTINGS, icon: SettingsIcon, text: 'Settings' },
]
