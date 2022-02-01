import { ElementType, FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { IconProps } from './withIcon.types'
import { DEFAULT_SIZE, IconSizes, IconVariants } from './withIcon.constants'
import { iconSizeStyles, iconStateStyles } from './withIcon.css'

export function withIcon(Component: ElementType<IconProps>): ElementType<IconProps> {
  const Icon: FC<IconProps> = ({ active, accent, size, className, ...rest }) => {
    const classNames = cn(
      iconStateStyles[
        (active && IconVariants.ACTIVE) || (accent && IconVariants.ACCENT) || IconVariants.PRIMARY
      ],
      iconSizeStyles[size || IconSizes.SMALL],
      className,
    )

    return (
      <Component
        width={DEFAULT_SIZE}
        height={DEFAULT_SIZE}
        viewBox="0 0 24 24"
        className={classNames}
        {...rest}
      />
    )
  }

  return Icon
}
