import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
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
      marginTop: pxToRem(3),
      fontSize: dt.vars.fontSize.body2,
    },
  },
})
