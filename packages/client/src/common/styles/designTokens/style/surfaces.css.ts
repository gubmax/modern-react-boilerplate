import { styleVariants } from '@vanilla-extract/css'

import { pxToRem } from '../../../helpers/pxToRem'
import { systemVars } from '../system.css'
import { themeVars } from '../theme.css'

export const surfaces = styleVariants(
  {
    flat: {
      background: themeVars.color.surface0,
      border: `${systemVars.border.width.regular} solid ${themeVars.color.border}`,
    },
    glass: {
      background: themeVars.color.transparentBg0,
      backdropFilter: `blur(${pxToRem(8)})`,
    },
    outline: {
      boxShadow: `inset 0 0 0 ${systemVars.border.width.regular} ${themeVars.color.secondary}`,
    },
  },
  'surfaces',
)
