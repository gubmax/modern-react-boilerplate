import { FC, memo } from 'react'
import { useLocation, useNavigate } from 'react-router'

import { IW } from 'client/src/common/components/inputs/InteractiveWrapper'
import { cn } from 'client/src/common/helpers/classNames'
import { IconVariants } from 'client/src/common/hocs/withIcon'
import { useEvent } from 'client/src/common/hooks/useEvent'
import { NavigationItemDesktopProps } from './NavigationItemDesktop.types'
import * as s from './NavigationItemDesktop.css'

const NavigationItemDesktop: FC<NavigationItemDesktopProps> = ({ to, icon: Icon, text }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleClick = useEvent(() => navigate(to))

  const isActive = to === pathname
  const iconVariant = isActive ? IconVariants.ACTIVE : IconVariants.SECONDARY

  return (
    <IW
      key={to}
      as="li"
      className={cn(s.wrapper, isActive && s.wrapperActive)}
      onClick={handleClick}
      onKeyPress={handleClick}
    >
      <Icon className={s.icon} variant={iconVariant} />
      <span className={s.text}>{text}</span>
    </IW>
  )
}

export default memo(NavigationItemDesktop)
