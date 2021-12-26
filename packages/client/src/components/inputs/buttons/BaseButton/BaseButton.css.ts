import { recipe } from '@vanilla-extract/recipes'

import { theme, gridAtom, vars } from 'client/src/common/styles'
import { ButtontTypes } from './BaseButton.constants'

export const button = recipe({
  base: [
    gridAtom({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    {
      borderRadius: vars.borderRadius.primary,
      cursor: 'pointer',
      fontWeight: 500,
      height: '3rem',
      minWidth: '10rem',
      padding: `0 ${theme.color.primary}`,
    },
  ],

  variants: {
    type: {
      [ButtontTypes.DEFAULT]: {
        border: `1px solid ${theme.color.accent}`,
        color: theme.color.accent,

        ':focus': { color: theme.color.accent },
      },
      [ButtontTypes.PRIMARY]: {
        background: theme.color.accent,
        color: theme.color.surface0,

        ':after': { background: 'rgba(255, 255, 255, 0.25)' },
      },
    },
  },
})
