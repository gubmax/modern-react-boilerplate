import { FC, memo } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import { NavigationList } from '../../NavigationList'
import { MAIN_ROUTES, SECONDARY_ROUTES } from './NavigationMenuDesktop.constants'
import * as s from './NavigationMenuDesktop.css'

const NavigationMenuDesktop: FC<StyledProps> = ({ className, style }) => {
  return (
    <ul className={cn(s.wrapper, className)} style={style}>
      <NavigationList className={s.navigationList} title="Overview" routes={MAIN_ROUTES} />
      <NavigationList className={s.navigationList} title="Other" routes={SECONDARY_ROUTES} />
    </ul>
  )
}

export default memo(NavigationMenuDesktop)
