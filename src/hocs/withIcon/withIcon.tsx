import { ElementType, FC } from 'react'

import { cn } from 'src/helpers'
import { IconProps } from './withIcon.types'
import { IconSizes } from './withIcon.constants'
import { iconSizeStyles, iconStateStyles } from './withIcon.css'

export function withIcon(Component: ElementType<IconProps>): ElementType<IconProps> {
  const Icon: FC<IconProps> = ({ active, size, className, ...rest }) => {
    const classNames = cn(
      !active && iconStateStyles.default,
      active && iconStateStyles.active,
      iconSizeStyles[size || IconSizes.SMALL],
      className,
    )

    return <Component className={classNames} {...rest} />
  }

  return Icon
}
