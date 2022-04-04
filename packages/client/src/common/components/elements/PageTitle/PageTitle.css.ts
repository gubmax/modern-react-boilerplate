import { style } from '@vanilla-extract/css'
import { vars } from 'client/src/common/styles'

import { typography } from 'client/src/common/styles/shared/typography.css'

export const title = style([typography.h1, { marginBottom: vars.space.s3 }])
