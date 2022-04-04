import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'
import { typography } from 'client/src/common/styles/shared/typography.css'

export const wrapper = style([
  surfaces.base,
  {
    background: 'linear-gradient(-45deg, #a655f6, #6565f1)',
  },
])

export const title = style([
  typography.h1,
  {
    marginBottom: dt.vars.space.s1,
    color: dt.vars.color.white,
  },
])

export const subtitle = style([
  typography.h2,
  {
    marginBottom: dt.vars.space.s3,
    color: dt.vars.color.white,
  },
])

export const buttonsGroup = gridAtom({
  display: 'flex',
})

export const button = style({
  marginRight: dt.vars.space.s1,
  width: '100%',
  minWidth: 'unset',

  ':last-child': { marginRight: 0 },

  '@media': {
    [dt.media.minWidth.mobile]: {
      width: 'unset',
      minWidth: '10rem',
    },
  },
})
