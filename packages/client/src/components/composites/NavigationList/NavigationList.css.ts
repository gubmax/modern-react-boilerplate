import { style } from '@vanilla-extract/css'
import { MediaQueries } from 'client/src/common/constants/media'

import { vars } from 'client/src/common/styles'

export const wrapper = style({
  padding: `${vars.space.s2} ${vars.space.s1}`,
})

export const text = style({
  display: 'none',
  marginLeft: vars.space.s1,

  '@media': {
    [MediaQueries.DESKTOP]: { display: 'unset' },
  },
})

export const listItem = style({
  display: 'flex',
  alignItems: 'center',
  padding: vars.space.s1,
  marginBottom: vars.space.s0,

  ':last-child': { marginBottom: 0 },
})

export const routeIcon = style({
  flexShrink: 0,
})
