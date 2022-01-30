import { styleVariants } from '@vanilla-extract/css'

import { palette, vars } from 'client/src/common/styles'
import { IconSizes } from './withIcon.constants'

// State

export const iconStateStyles = styleVariants(
  {
    default: palette.color.primary,
    active: palette.color.accent,
  },
  (color) => ({ fill: color }),
)

// Sizes

export const iconSizeStyles = styleVariants(
  {
    [IconSizes.SMALL]: vars.fontSize.h2,
    [IconSizes.HUGE]: '8rem',
  },
  (size) => ({ width: size, height: size }),
)
