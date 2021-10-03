import { style } from '@vanilla-extract/css'

import { gridAtom, theme, vars } from 'src/styles'

export const wrapper = style([
  gridAtom({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  {
    width: '3rem',
    height: '3rem',
    background: theme.color.accentLight,
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: `inset 0 0 0 0.1rem ${vars.colors.transparentBorder}`,
  },
])
