import { styleVariants } from '@vanilla-extract/css'

import { pxToRem } from '../../helpers/pxToRem'
import { dt } from '../designTokens'

export const surfaces = styleVariants(
  {
    flat: {
      background: dt.vars.theme.color.surface0,
      border: `${dt.vars.border.width.regular} solid ${dt.vars.theme.color.border}`,
    },
    glass: {
      background: dt.vars.theme.color.transparentBg0,
      backdropFilter: `blur(${pxToRem(8)})`,
    },
    outline: {
      boxShadow: `inset 0 0 0 ${dt.vars.border.width.regular} ${dt.vars.theme.color.secondary}`,
    },
  },
  'surfaces',
)
