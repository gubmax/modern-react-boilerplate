import { style } from '@vanilla-extract/css'

import { MediaQueries } from 'client/src/common/constants/media'
import { vars } from 'client/src/common/styles'

export const page = style({
  display: 'grid',
  gridTemplateColumns: '20rem 1fr',
  gridTemplateRows: '0fr 1fr',
  gridTemplateAreas: `
    "header header"
    "aside main"
  `,
  minHeight: '100vh',

  '@media': {
    [MediaQueries.TOUCH]: { gridTemplateColumns: '0fr 1fr' },
  },
})

export const header = style({
  gridArea: 'header',
  padding: `${vars.space.s2} ${vars.space.s3}`,
})

export const main = style({
  gridArea: 'main',
  padding: `0 ${vars.space.s3} ${vars.space.s2}`,
})

export const sidebar = style({
  gridArea: 'aside',
  padding: `0 ${vars.space.s3} ${vars.space.s3}`,
})
