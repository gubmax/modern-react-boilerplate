import { style } from '@vanilla-extract/css'
import { MediaQueries } from 'client/src/common/constants/media'

import { theme, vars } from 'client/src/common/styles'

export const wrapper = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around',
  padding: vars.space.s0,
  borderTop: `1px solid ${theme.color.borderLight}`,
  borderRadius: `${vars.borderRadius.primary} ${vars.borderRadius.primary} 0 0`,

  '@media': {
    [MediaQueries.MIN_WIDTH_MOBILE]: {
      flexDirection: 'column',
      padding: `${vars.space.s2} ${vars.space.s1}`,
      border: 'none',
      borderRadius: vars.borderRadius.primary,
    },
  },
})

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
