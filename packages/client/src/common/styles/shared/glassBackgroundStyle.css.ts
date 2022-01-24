import { style } from '@vanilla-extract/css'

import { theme } from '../vars.css'

export const glassBackgroundStyle = style({
  background: theme.color.transparentBg0,
  backdropFilter: 'blur(0.5rem)',
})
