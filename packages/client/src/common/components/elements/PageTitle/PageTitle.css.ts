import { style } from '@vanilla-extract/css'

import { dt } from 'client/src/common/styles/designTokens'

import { typography } from 'client/src/common/styles/shared/typography.css'

export const title = style([typography.h1, { marginBottom: dt.vars.space.s3 }])
