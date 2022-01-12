import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { IW } from 'client/src/components/inputs/InteractiveWrapper'
import { Wrapper, WrapperVariants } from 'client/src/components/surfaces/Wrapper'
import { ROUTES } from './NavigationList.constants'
import * as s from './NavigationList.css'

const NavigationList: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <Wrapper as="ul" className={s.wrapper}>
      {ROUTES.map(({ to, icon: Icon, text }) => {
        const active = to === pathname
        return (
          <IW
            key={to}
            as="li"
            className={s.listItem}
            active={active}
            variant={WrapperVariants.BASIC}
            onClick={() => navigate(to)}
          >
            <Icon className={s.routeIcon} />
            <span className={s.text}>{text}</span>
          </IW>
        )
      })}
    </Wrapper>
  )
}

export default NavigationList
