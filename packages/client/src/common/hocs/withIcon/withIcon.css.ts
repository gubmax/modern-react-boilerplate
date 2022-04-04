import { styleVariants } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'
import { IconSizes, IconVariants } from './withIcon.constants'

// State

export const iconStateStyles = styleVariants({
  [IconVariants.ACCENT]: { fill: dt.vars.theme.color.accent },
  [IconVariants.ACTIVE]: {
    fill: 'url(#lg-accent-light)',

    '@media': {
      [dt.media.prefersColorScheme.dark]: { fill: 'url(#lg-accent-dark)' },
    },
  },
  [IconVariants.PRIMARY]: { fill: dt.vars.theme.color.primary },
})

// Sizes

export const iconSizeStyles = styleVariants(
  {
    [IconSizes.SMALL]: dt.vars.icons.small,
    [IconSizes.HUGE]: dt.vars.icons.huge,
  },
  (size) => ({ width: size, height: size }),
)
