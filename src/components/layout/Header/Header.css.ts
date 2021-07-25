import { composeStyles, style } from '@vanilla-extract/css'
import { cssCommonVars, gridAtom } from 'src/styles'

export const wrapper = composeStyles(
  gridAtom({
    display: 'flex',
    alignItems: 'center',
  }),
  style({
    gridArea: 'header',
    padding: cssCommonVars.space.primary,
  }),
)

export const logoWrapper = style({
  marginBottom: 0,
})

export const repoLink = gridAtom({
  marginLeft: 'auto',
})
