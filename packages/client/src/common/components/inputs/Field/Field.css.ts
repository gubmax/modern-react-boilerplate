import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { dt } from 'client/src/common/styles/designTokens'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'

export const input = style([
  surfaces.flat,
  {
    height: pxToRem(46),
    fontSize: dt.vars.fontSize.subtitle1,
    lineHeight: 1,
    width: '100%',
    border: `${pxToRem(1)} solid transparent`,
    transition: '0.1s color, 0.1s border-color, 0.1s box-shadow',

    '::placeholder': {
      color: dt.vars.theme.color.secondary,
    },

    ':focus': {
      boxShadow: `0 0 0 ${pxToRem(4)} ${dt.vars.theme.color.accentLight}`,
      borderColor: dt.vars.theme.color.accent,
    },
  },
])

export const withLabel = style({
  paddingTop: pxToRem(28),
  height: pxToRem(64),
})

export const label = style({
  position: 'absolute',
  top: pxToRem(12),
  left: pxToRem(16),
  color: dt.vars.theme.color.secondary,
})

export const wrapper = style({
  position: 'relative',
})
