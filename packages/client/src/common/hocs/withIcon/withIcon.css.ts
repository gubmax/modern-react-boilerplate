import { styleVariants } from '@vanilla-extract/css'

import { palette, vars } from 'client/src/common/styles'
import { MediaQueries } from '../../constants/media'
import { IconSizes, IconVariants } from './withIcon.constants'

// State

export const iconStateStyles = styleVariants({
  [IconVariants.ACCENT]: { fill: palette.color.accent },
  [IconVariants.ACTIVE]: {
    fill: 'url(#lg-accent-light)',

    '@media': {
      [MediaQueries.COLOR_CHEME_DARK]: { fill: 'url(#lg-accent-dark)' },
    },
  },
  [IconVariants.PRIMARY]: { fill: palette.color.primary },
})

// Sizes

export const iconSizeStyles = styleVariants(
  {
    [IconSizes.SMALL]: vars.icons.small,
    [IconSizes.HUGE]: vars.icons.huge,
  },
  (size) => ({ width: size, height: size }),
)
