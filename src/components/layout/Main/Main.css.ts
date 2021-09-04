import { style } from '@vanilla-extract/css'
import { vars } from 'src/styles'

export const page = style({
  display: 'grid',
  gridTemplateColumns: '20rem 1fr',
  gridTemplateRows: '0fr 1fr',
  gridTemplateAreas: `
    "header header"
    "aside main"
  `,
  minHeight: '100vh',
})

export const main = style({
  gridArea: 'main',
  padding: `0 ${vars.space.s3} ${vars.space.s2}`,
})
