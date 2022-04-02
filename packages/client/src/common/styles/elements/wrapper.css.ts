import { style, styleVariants } from '@vanilla-extract/css'

import { palette } from '../palette.css'
import { vars } from '../vars.css'

const wrapperBaseStyle = style({
  padding: `${vars.space.s2} ${vars.space.s3}`,
  borderRadius: vars.borderRadius.primary,
})

export const wrapperStyleVariants = styleVariants({
  default: [wrapperBaseStyle],
  flat: [
    wrapperBaseStyle,
    {
      background: palette.color.surface0,
      borderRadius: vars.borderRadius.primary,
    },
  ],
  glass: [
    wrapperBaseStyle,
    {
      background: palette.color.transparentBg0,
      backdropFilter: 'blur(0.5rem)',
    },
  ],
  outline: [wrapperBaseStyle, { boxShadow: `inset 0 0 0 0.1rem ${palette.color.border}` }],
})
