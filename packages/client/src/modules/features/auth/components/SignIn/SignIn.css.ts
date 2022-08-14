import { style } from '@vanilla-extract/css'

import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style({
  '@media': {
    [dt.media.minWidth.mobile]: {
      width: dt.vars.size.screen.min,
    },
  },
})

export const title = style([
  dt.style.typography.h2,
  {
    marginBottom: dt.vars.space.s0,
  },
])

export const subtitle = style({
  marginBottom: dt.vars.space.s3,
  color: dt.vars.theme.color.secondary,
})

export const field = style({
  marginBottom: dt.vars.space.s3,
})

export const forgotPasswordWrapper = style([
  gridAtom({
    display: 'flex',
    justifyContent: 'flex-end',
  }),
  { marginBottom: dt.vars.space.s3 },
])

export const linkWrapper = style([
  gridAtom({
    display: 'flex',
    justifyContent: 'center',
  }),
  {
    marginTop: dt.vars.space.s3,
  },
])

export const agreement = style({
  marginTop: dt.vars.space.s3,
})
