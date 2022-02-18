import { recipe } from '@vanilla-extract/recipes'

import { vars, gridAtom, palette } from 'client/src/common/styles'
import { ButtonTypes } from './BaseButton.constants'

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
      [ButtonTypes.DEFAULT]: {
        border: `1px solid ${palette.color.accent}`,
        color: palette.color.accent,
      },
      [ButtonTypes.DEFAULT_WHITE]: {
        border: `1px solid ${vars.color.white}`,
        color: vars.color.white,

        ':after': { background: 'rgba(255, 255, 255, 0.25)' },
      },
      [ButtonTypes.PRIMARY]: {
        background: palette.color.accent,
        color: palette.color.surface0,

        ':after': { background: 'rgba(255, 255, 255, 0.25)' },
      },
      [ButtonTypes.PRIMARY_WHITE]: {
        background: vars.color.white,
        color: palette.color.surface0,

        ':after': { background: 'rgba(0, 0, 0, 0.25)' },
      },
    },
  },
})
