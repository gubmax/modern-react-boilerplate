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
    background: dt.vars.theme.color.surface1,
    border: `${dt.vars.border.width.regular} solid transparent`,
    borderRadius: dt.vars.border.radius.regular,
    transition: '0.1s background, 0.1s border-color, 0.1s box-shadow',

    '::placeholder': {
      color: dt.vars.theme.color.secondary,
    },

    ':focus': {
      background: dt.vars.theme.color.surface0,
      boxShadow: `0 0 0 ${pxToRem(4)} ${dt.vars.theme.color.accentLight}`,
      borderColor: dt.vars.theme.color.accent,
    },
  },
])

export const withLabel = style({
  padding: `${dt.vars.space.s2} ${dt.vars.space.s2} 0`,
  height: pxToRem(64),
})

export const label = style({
  position: 'absolute',
  top: dt.vars.space.s1,
  left: dt.vars.space.s2,
  color: dt.vars.theme.color.secondary,
})

export const wrapper = style({
  position: 'relative',
})
