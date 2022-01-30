import { recipe } from '@vanilla-extract/recipes'

import { vars, gridAtom, palette } from 'client/src/common/styles'
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
      padding: `0 ${palette.color.primary}`,
    },
  ],

  variants: {
    type: {
      [ButtontTypes.DEFAULT]: {
        border: `1px solid ${palette.color.accent}`,
        color: palette.color.accent,

        ':focus': { color: palette.color.accent },
      },
      [ButtontTypes.PRIMARY]: {
        background: palette.color.accent,
        color: palette.color.surface0,

        ':after': { background: 'rgba(255, 255, 255, 0.25)' },
      },
    },
  },
})
