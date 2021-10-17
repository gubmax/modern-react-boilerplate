import { style } from '@vanilla-extract/css'

import { vars } from 'src/styles'

export const wrapper = style({ fontSize: vars.fontSize.accent })

export const large = style({ width: '100%' })
