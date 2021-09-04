import { style } from '@vanilla-extract/css'
import { vars, gridAtom } from 'src/styles'

export const wrapper = style([
  gridAtom({
    display: 'flex',
    alignItems: 'center',
  }),
  {
    gridArea: 'header',
    padding: vars.space.s3,
  },
])

export const logoWrapper = style({
  marginBottom: 0,
})

export const repoLink = gridAtom({
  marginLeft: 'auto',
})
