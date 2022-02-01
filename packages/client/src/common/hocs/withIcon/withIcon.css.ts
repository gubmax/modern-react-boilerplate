import { styleVariants } from '@vanilla-extract/css'

import { palette, vars } from 'client/src/common/styles'
import { IconSizes, IconVariants } from './withIcon.constants'

// State

export const iconStateStyles = styleVariants(
  {
    [IconVariants.ACCENT]: palette.color.accent,
    [IconVariants.ACTIVE]: 'url(#gradient_0)',
    [IconVariants.PRIMARY]: palette.color.primary,
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
