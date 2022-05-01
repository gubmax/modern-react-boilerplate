import { FC, memo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { IW } from 'client/src/common/components/inputs/InteractiveWrapper'
import { cn } from 'client/src/common/helpers/classNames'
import { IconVariants } from 'client/src/common/hocs/withIcon'
import { StyledProps } from 'client/src/common/typings'
import { ROUTES } from './NavigationMenuTouch.constants'
import * as s from './NavigationMenuTouch.css'

const NavigationMenuTouch: FC<StyledProps> = ({ className, style }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <ul className={cn(s.wrapper, className)} style={style}>
      {ROUTES.map(({ to, icon: Icon, text }) => {
        const active = to === pathname
        const navigateTo = () => navigate(to)

        return (
          <IW
            key={to}
            as="li"
            className={s.listItem}
            active={active}
            onClick={navigateTo}
            onKeyPress={navigateTo}
          >
            <Icon className={s.routeIcon} variant={active ? IconVariants.ACTIVE : undefined} />
            <span className={s.text}>{text}</span>
          </IW>
        )
      })}
    </ul>
  )
}

export default memo(NavigationMenuTouch)
