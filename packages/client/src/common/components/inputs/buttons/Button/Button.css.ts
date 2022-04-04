import { style } from '@vanilla-extract/css'

import { vars } from 'client/src/common/styles'

export const wrapper = style({ fontSize: vars.fontSize.subtitle1 })

export const large = style({ width: '100%' })
