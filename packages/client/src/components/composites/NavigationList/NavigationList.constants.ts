import { ElementType } from 'react'

import { IconProps } from 'client/src/common/hocs/withIcon'
import { PageRoutes } from 'client/src/browser/http/constants'
import { CollectionIcon, SalesIcon, ScheduleIcon, ShowcaseIcon } from 'client/src/components/icons'

export const ROUTES: Array<{
  to: PageRoutes
  icon: ElementType<IconProps>
  text: string
}> = [
  { to: PageRoutes.ROOT, icon: ShowcaseIcon, text: 'Showcase' },
  { to: PageRoutes.COLLECTION, icon: CollectionIcon, text: 'My Collection' },
  { to: PageRoutes.SALES, icon: SalesIcon, text: 'Sales' },
  { to: PageRoutes.SCHEDULE, icon: ScheduleIcon, text: 'Schedule' },
]
