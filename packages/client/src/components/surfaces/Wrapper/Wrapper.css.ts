import { style, styleVariants } from '@vanilla-extract/css'

import { vars, palette, glassBackgroundStyle } from 'client/src/common/styles'
import { WrapperVariants } from './Wrapper.constants'

const baseWrapper = style({
  padding: `${vars.space.s2} ${vars.space.s3}`,
  borderRadius: vars.borderRadius.primary,
})

export const wrapperVariants = styleVariants({
  [WrapperVariants.DEFAULT]: [baseWrapper],
  [WrapperVariants.FLAT]: [
    baseWrapper,
    {
      background: palette.color.surface0,
      borderRadius: vars.borderRadius.primary,
    },
  ],
  [WrapperVariants.GLASS]: [baseWrapper, glassBackgroundStyle],
  [WrapperVariants.OUTLINE]: [
    baseWrapper,
    { boxShadow: `inset 0 0 0 0.1rem ${palette.color.border}` },
  ],
})
