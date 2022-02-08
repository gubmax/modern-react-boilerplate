import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { IW } from 'client/src/components/inputs/InteractiveWrapper'
import { Wrapper } from 'client/src/components/surfaces/Wrapper'
import { ROUTES } from './NavigationList.constants'
import * as s from './NavigationList.css'

const NavigationList: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <Wrapper as="ul" className={s.wrapper}>
      {ROUTES.map(({ to, icon: Icon, text }) => {
        const active = to === pathname
        const goTo = () => navigate(to)

        return (
          <IW key={to} as="li" className={s.listItem} active={active} onClick={goTo}>
            <Icon className={s.routeIcon} active={active} />
            <span className={s.text}>{text}</span>
          </IW>
        )
      })}
    </Wrapper>
  )
}

export default NavigationList
