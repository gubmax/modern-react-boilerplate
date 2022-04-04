import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'

export const wrapper = style([
  surfaces.glass,
  {
    display: 'flex',
    width: '100%',
    minWidth: dt.vars.size.screen.min,
    justifyContent: 'space-around',
    padding: dt.vars.space.s1,
    borderTop: `1px solid ${dt.vars.theme.color.borderLight}`,
    borderRadius: `${dt.vars.borderRadius.primary} ${dt.vars.borderRadius.primary} 0 0`,

    '@media': {
      [dt.media.minWidth.mobile]: {
        flexDirection: 'column',
        minWidth: 'unset',
        padding: `${dt.vars.space.s2} ${dt.vars.space.s1}`,
        background: dt.vars.theme.color.surface0,
        border: 'none',
        borderRadius: dt.vars.borderRadius.primary,
        backdropFilter: 'none',
      },
    },
  },
])

export const text = style({
  display: 'none',
  marginLeft: dt.vars.space.s1,

  '@media': {
    [dt.media.minWidth.desktop]: { display: 'unset' },
  },
})

export const listItem = style({
  display: 'flex',
  alignItems: 'center',
  padding: dt.vars.space.s1,

  ':last-child': { marginBottom: 0 },

  '@media': {
    [dt.media.minWidth.desktop]: { marginBottom: dt.vars.space.s0 },
  },
})

export const routeIcon = style({
  flexShrink: 0,
})
