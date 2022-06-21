import { FC, memo, useMemo } from 'react'

import { List } from 'client/src/common/components/surfaces/List'
import { NavigationItemDesktop } from '../desktop/NavigationItemDesktop'
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
      <List>{routesTemplate}</List>
    </div>
  )
}

export default memo(NavigationList)
