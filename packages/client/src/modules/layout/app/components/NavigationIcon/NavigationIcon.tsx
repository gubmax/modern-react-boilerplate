import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { NavigationIconProps } from './NavigationIcon.types'
import * as s from './NavigationIcon.css'

const NavigationIcon: FC<NavigationIconProps> = ({
  children,
  className,
  style,
  text,
  onClick,
  onKeyPress,
}) => {
  return (
    <div
      className={cn(s.wrapper, className)}
      style={style}
      onClick={onClick}
      onKeyPress={onKeyPress}
      tabIndex={0}
    >
      {children}
      <span className={s.text}>{text}</span>
    </div>
  )
}

export default NavigationIcon
