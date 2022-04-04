import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  padding: dt.vars.space.s1,

  '@media': {
    [dt.media.minWidth.mobile]: {
      padding: 0,
    },
  },
})

export const text = style({
  display: 'none',
  whiteSpace: 'nowrap',

  '@media': {
    [dt.media.minWidth.mobile]: {
      display: 'unset',
      marginTop: '0.25rem',
      fontSize: dt.vars.fontSize.body2,
    },
  },
})
