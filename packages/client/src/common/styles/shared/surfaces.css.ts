import { styleVariants } from '@vanilla-extract/css'

import { pxToRem } from '../../helpers/pxToRem'
import { dt } from '../designTokens'

export const surfaces = styleVariants(
  {
    flat: { background: dt.vars.theme.color.surface0 },
    glass: {
      background: dt.vars.theme.color.transparentBg0,
      backdropFilter: `blur(${pxToRem(8)})`,
    },
    outline: { boxShadow: `inset 0 0 0 ${pxToRem(1.25)} ${dt.vars.theme.color.border}` },
  },
  'surfaces',
)
