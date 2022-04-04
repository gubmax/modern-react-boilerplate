import { style } from '@vanilla-extract/css'

import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'

export const wrapper = style([
  surfaces.glass,
  gridAtom({
    display: 'flex',
    alignItems: 'center',
  }),
  {
    height: dt.vars.size.headerHeight,
    padding: 0,
    borderRadius: `0 0 ${dt.vars.borderRadius.primary} ${dt.vars.borderRadius.primary}`,

    '@media': {
      [dt.media.minWidth.mobile]: {
        padding: `${dt.vars.space.s1} ${dt.vars.space.s3}`,
      },

      [dt.media.minWidth.tablet]: {
        padding: `${dt.vars.space.s1} ${dt.vars.space.s4}`,
      },
    },
  },
])

export const linkLogo = style([
  gridAtom({ flexShrink: 0 }),
  {
    marginLeft: dt.vars.space.s2,

    '@media': {
      [dt.media.minWidth.mobile]: {
        marginLeft: 'unset',
      },
    },
  },
])

export const linkRepo = style({
  margin: `0 ${dt.vars.space.s3}`,
})

export const search = style({
  maxWidth: '32rem',
  margin: '0 auto',
})

export const navigationMenu = style({
  marginLeft: dt.vars.space.s3,
})
