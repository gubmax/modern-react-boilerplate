import { style } from '@vanilla-extract/css'

import { gridAtom, vars, palette } from 'client/src/common/styles'

export const wrapper = style([
  gridAtom({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  {
    width: '3rem',
    height: '3rem',
    background: palette.color.accentLight,
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: `inset 0 0 0 0.1rem ${vars.colors.transparentBorder}`,
    cursor: 'pointer',
  },
])
