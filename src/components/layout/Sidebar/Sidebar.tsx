import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { IW } from 'src/components/inputs'
import { List } from 'src/components/surfaces'
import { ROUTES } from './Sidebar.constants'
import * as s from './Sidebar.css'

const Sidebar: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <aside className={s.wrapper}>
      <List as="ul">
        {ROUTES.map(({ to, icon, text }) => (
          <IW
            key={to}
            as="li"
            className={s.listItem}
            active={to === pathname}
            noPadding
            onClick={() => navigate(to)}
          >
            <i className={s.routeIcon}>{icon}</i>
            {text}
          </IW>
        ))}
      </List>
    </aside>
  )
}

export default Sidebar
