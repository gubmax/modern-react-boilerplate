import { ElementType } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { IconProps } from 'client/src/common/hocs/withIcon'

export interface NavigationItemDesktopProps {
  to: PageRoutes
  icon: ElementType<IconProps>
  text: string
}
