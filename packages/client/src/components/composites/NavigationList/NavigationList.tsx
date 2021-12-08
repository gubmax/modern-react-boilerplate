import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { IW } from 'client/src/components/inputs'
import { List } from 'client/src/components/surfaces'
import { ROUTES } from './NavigationList.constants'
import * as s from './NavigationList.css'

const NavigationList: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <List as="ul">
      {ROUTES.map(({ to, icon: Icon, text }) => {
        const active = to === pathname
        return (
          <IW
            key={to}
            as="li"
            className={s.listItem}
            active={active}
            noPadding
            onClick={() => navigate(to)}
          >
            <Icon className={s.routeIcon} active={active} />
            {text}
          </IW>
        )
      })}
    </List>
  )
}

export default NavigationList
