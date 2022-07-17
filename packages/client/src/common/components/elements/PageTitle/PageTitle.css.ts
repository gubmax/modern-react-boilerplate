import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

export const title = style([dt.style.typography.h1, { marginBottom: dt.vars.space.s3 }])
