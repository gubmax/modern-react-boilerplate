import { style } from '@vanilla-extract/css'

import { MediaQueries } from 'client/src/common/constants/media'
import { ScreenSizes } from 'client/src/common/constants/screen'
import { vars, palette } from 'client/src/common/styles'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'

export const wrapper = style([
  surfaces.glass,
  {
    display: 'flex',
    width: '100%',
    minWidth: ScreenSizes.MIN,
    justifyContent: 'space-around',
    padding: vars.space.s1,
    borderTop: `1px solid ${palette.color.borderLight}`,
    borderRadius: `${vars.borderRadius.primary} ${vars.borderRadius.primary} 0 0`,

    '@media': {
      [MediaQueries.MIN_WIDTH_MOBILE]: {
        flexDirection: 'column',
        minWidth: 'unset',
        padding: `${vars.space.s2} ${vars.space.s1}`,
        background: palette.color.surface0,
        border: 'none',
        borderRadius: vars.borderRadius.primary,
        backdropFilter: 'none',
      },
    },
  },
])

export const text = style({
  display: 'none',
  marginLeft: vars.space.s1,

  '@media': {
    [MediaQueries.MIN_WIDTH_DESKTOP]: { display: 'unset' },
  },
})

export const listItem = style({
  display: 'flex',
  alignItems: 'center',
  padding: vars.space.s1,

  ':last-child': { marginBottom: 0 },

  '@media': {
    [MediaQueries.MIN_WIDTH_MOBILE]: { marginBottom: vars.space.s0 },
  },
})

export const routeIcon = style({
  flexShrink: 0,
})
