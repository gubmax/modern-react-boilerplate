import { styleVariants } from '@vanilla-extract/css'

import { theme, vars } from 'client/src/styles'
import { IconSizes } from './withIcon.constants'

// State

export const iconStateStyles = styleVariants(
  {
    default: theme.color.primary,
    active: theme.color.accent,
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
