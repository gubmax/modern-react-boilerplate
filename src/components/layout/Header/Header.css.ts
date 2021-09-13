import { style } from '@vanilla-extract/css'
import { gridAtom } from 'src/styles'

export const wrapper = gridAtom({
  display: 'flex',
  alignItems: 'center',
})

export const logoWrapper = style({
  marginBottom: 0,
})

export const repoLink = gridAtom({
  marginLeft: 'auto',
})
