import { FC, memo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { RoundedButton } from 'client/src/common/components/inputs/buttons/RoundedButton'
import { cn } from 'client/src/common/helpers/classNames'
import { IconVariants } from 'client/src/common/hocs/withIcon'
import { StyledProps } from 'client/src/common/typings'
import { ROUTES } from './NavigationMenuTouch.constants'
import * as s from './NavigationMenuTouch.css'

const NavigationMenuTouch: FC<StyledProps> = ({ className, style }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <nav className={cn(s.wrapper, className)} style={style}>
      {ROUTES.map(({ to, icon: Icon, text }) => {
        const active = to === pathname
        const navigateTo = () => navigate(to)

        return (
          <RoundedButton
            key={to}
            as="a"
            className={s.listItem}
            onClick={navigateTo}
            onKeyPress={navigateTo}
          >
            <Icon variant={active ? IconVariants.ACTIVE : IconVariants.SECONDARY} />
            <span className={s.text}>{text}</span>
          </RoundedButton>
        )
      })}
    </nav>
  )
}

export default memo(NavigationMenuTouch)
