import { FC, memo, useMemo } from 'react'

import { NavigationItemDesktop } from '../desktop/NavigationItemDekstop'
import { NavigationListProps } from './NavigationList.types'
import * as s from './NavigationList.css'

const NavigationList: FC<NavigationListProps> = ({ title, routes, className, style }) => {
  const routesTemplate = useMemo(
    () => routes.map((route, i) => <NavigationItemDesktop key={i} {...route} />),
    [routes],
  )

  return (
    <div className={className} style={style}>
      <span className={s.title}>{title}</span>
      {routesTemplate}
    </div>
  )
}

export default memo(NavigationList)
