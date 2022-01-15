import { style, styleVariants } from '@vanilla-extract/css'

import { vars, theme } from 'client/src/common/styles'
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
      background: theme.color.surface0,
      borderRadius: vars.borderRadius.primary,
    },
  ],
  [WrapperVariants.OUTLINE]: [
    baseWrapper,
    { boxShadow: `inset 0 0 0 0.1rem ${theme.color.border}` },
  ],
})
