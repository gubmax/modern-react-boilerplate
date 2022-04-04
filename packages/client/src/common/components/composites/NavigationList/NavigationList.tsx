import { VFC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { IW } from 'client/src/common/components/inputs/InteractiveWrapper'
import { ROUTES } from './NavigationList.constants'
import * as s from './NavigationList.css'

const NavigationList: VFC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <ul className={s.wrapper}>
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
    </ul>
  )
}

export default NavigationList
