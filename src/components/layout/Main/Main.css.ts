import { style } from '@vanilla-extract/css'
import { cssCommonVars } from 'src/styles'

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
  padding: `0 ${cssCommonVars.space.primary} ${cssCommonVars.space.secondary}`,
})
