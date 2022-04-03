import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { palette, vars } from 'client/src/common/styles'

export const input = style({
  height: pxToRem(46),
  fontSize: vars.fontSize.accent,
  lineHeight: 1,
  width: '100%',
  border: `${pxToRem(1)} solid transparent`,
  transition: '0.1s color, 0.1s border-color, 0.1s box-shadow',

  '::placeholder': {
    color: palette.color.secondary,
  },

  ':focus': {
    boxShadow: `0 0 0 ${pxToRem(4)} ${palette.color.accentLight}`,
    borderColor: palette.color.accent,
  },
})

export const withLabel = style({
  paddingTop: pxToRem(28),
  height: pxToRem(64),
})

export const label = style({
  position: 'absolute',
  top: pxToRem(12),
  left: pxToRem(16),
  color: palette.color.secondary,
})

export const wrapper = style({
  position: 'relative',
})
