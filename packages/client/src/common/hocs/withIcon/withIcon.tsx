import { ElementType, FC } from 'react'

import { cn } from 'client/src/common/helpers'
import { IconProps } from './withIcon.types'
import { DEFAULT_SIZE, IconSizes } from './withIcon.constants'
import { iconSizeStyles, iconStateStyles } from './withIcon.css'

export function withIcon(Component: ElementType<IconProps>): ElementType<IconProps> {
  const Icon: FC<IconProps> = ({ active, size, className, ...rest }) => {
    const classNames = cn(
      !active && iconStateStyles.default,
      active && iconStateStyles.active,
      iconSizeStyles[size || IconSizes.SMALL],
      className,
    )

    return <Component width={DEFAULT_SIZE} height={DEFAULT_SIZE} className={classNames} {...rest} />
  }

  return Icon
}
