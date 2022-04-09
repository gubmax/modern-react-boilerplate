import { ElementType, VFC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { DEFAULT_SIZE, IconSizes, IconVariants } from './withIcon.constants'
import { IconProps } from './withIcon.types'
import { iconSizeStyles, iconStateStyles } from './withIcon.css'

export function withIcon(Component: ElementType<IconProps>): ElementType<IconProps> {
  const Icon: VFC<IconProps> = ({ variant = IconVariants.PRIMARY, size, className, ...rest }) => {
    const classNames = cn(
      iconStateStyles[variant],
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
