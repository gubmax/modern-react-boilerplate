import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { systemVars } from '../system.css'
import { themeVars } from '../theme.css'

const WIDTH_BORDER = pxToRem(4)

const focusVisibleBase = style({
  border: `${systemVars.border.width.regular} solid transparent`,
})

export const focusVisiblePrimary = style(
  [
    focusVisibleBase,
    {
      ':focus-visible': {
        boxShadow: `0 0 0 ${WIDTH_BORDER} ${themeVars.color.accentLight}`,
        borderColor: themeVars.color.accent,
      },
    },
  ],
  'focusVisiblePrimary',
)

export const focusVisibleWhite = style(
  [
    focusVisibleBase,
    {
      ':focus-visible': {
        boxShadow: `0 0 0 ${WIDTH_BORDER} ${systemVars.color.transparentWhite}`,
        borderColor: systemVars.color.white,
      },
    },
  ],
  'focusVisibleWhite',
)
