import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router'

import { List } from 'src/components/surfaces/List'
import { IW } from 'src/components/inputs/InteractiveWrapper'
import { ROUTES } from './Header.constants'

const Header: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <List as="ul">
      {ROUTES.map(({ to, text }) => (
        <IW key={to} as="li" active={to === pathname} onClick={() => navigate(to)}>
          {text}
        </IW>
      ))}
    </List>
  )
}

export default Header
