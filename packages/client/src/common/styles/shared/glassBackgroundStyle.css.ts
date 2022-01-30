import { style } from '@vanilla-extract/css'

import { palette } from '../palette.css'

export const glassBackgroundStyle = style({
  background: palette.color.transparentBg0,
  backdropFilter: 'blur(0.5rem)',
})
