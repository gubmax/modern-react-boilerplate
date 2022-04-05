import { recipe } from '@vanilla-extract/recipes'

import { dt } from 'client/src/common/styles/designTokens'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { ButtonTypes } from './BaseButton.constants'

export const button = recipe({
  base: [
    gridAtom({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    {
      borderRadius: dt.vars.borderRadius.primary,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: dt.vars.fontSize.body1,
      fontWeight: 500,
      height: '3rem',
      minWidth: '10rem',
      padding: `0 ${dt.vars.theme.color.primary}`,
    },
  ],

  variants: {
    type: {
      [ButtonTypes.DEFAULT]: {
        border: `1px solid ${dt.vars.theme.color.accent}`,
        background: 'transparent',
        color: dt.vars.theme.color.accent,
      },
      [ButtonTypes.DEFAULT_WHITE]: {
        border: `1px solid ${dt.vars.color.white}`,
        background: 'transparent',
        color: dt.vars.color.white,

        ':after': { background: 'rgba(255, 255, 255, 0.25)' },
      },
      [ButtonTypes.PRIMARY]: {
        border: 0,
        background: dt.vars.theme.color.accent,
        color: dt.vars.theme.color.surface0,

        ':after': { background: 'rgba(255, 255, 255, 0.25)' },
      },
      [ButtonTypes.PRIMARY_WHITE]: {
        border: 0,
        background: dt.vars.color.white,
        color: dt.vars.color.black,

        ':after': { background: 'rgba(0, 0, 0, 0.25)' },
      },
    },
  },
})
