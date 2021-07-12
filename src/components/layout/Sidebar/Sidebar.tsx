import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { IW } from 'src/components/inputs/InteractiveWrapper'
import { List } from 'src/components/surfaces/List'
import { ROUTES } from './Sidebar.constants'
import * as s from './Sidebar.css'

const Sidebar: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <aside className={s.wrapper}>
      <List as="ul">
        {ROUTES.map(({ to, text }) => (
          <IW key={to} as="li" active={to === pathname} onClick={() => navigate(to)}>
            {text}
          </IW>
        ))}
      </List>
    </aside>
  )
}

export default Sidebar
