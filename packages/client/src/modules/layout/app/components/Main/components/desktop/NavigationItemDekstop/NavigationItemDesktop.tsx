import { FC, memo, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router'

import { IW } from 'client/src/common/components/inputs/InteractiveWrapper'
import { cn } from 'client/src/common/helpers/classNames'
import { IconVariants } from 'client/src/common/hocs/withIcon'
import { useEnterPress } from 'client/src/common/hooks/useEnterPress'
import { NavigationItemDesktopProps } from './NabigationItemDesktop.types'
import * as s from './NavigationItemDesktop.css'

const NavigationItemDesktop: FC<NavigationItemDesktopProps> = ({ to, icon: Icon, text }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleClick = useCallback(() => navigate(to), [navigate, to])
  const handleEnterPress = useEnterPress(handleClick)

  const isActive = to === pathname
  const iconVariant = isActive ? IconVariants.ACTIVE : undefined

  return (
    <IW
      key={to}
      as="li"
      className={cn(s.wrapper, isActive && s.wrapperActive)}
      onClick={handleClick}
      onKeyPress={handleEnterPress}
    >
      <Icon className={s.icon} variant={iconVariant} />
      <span className={s.text}>{text}</span>
    </IW>
  )
}

export default memo(NavigationItemDesktop)
