import { style } from '@vanilla-extract/css'

import { themeVars } from '../theme.css'

export const active = style(
  {
    position: 'relative',
    overflow: 'hidden',
    zIndex: 0,

    ':after': {
      background: themeVars.color.accentLight,
      borderRadius: '50%',
      content: '""',
      display: 'block',
      left: '50%',
      opacity: 0,
      paddingTop: 0,
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: 0,
      zIndex: -1,
    },

    selectors: {
      '&:active:after': {
        opacity: 1,
        paddingTop: '120%',
        width: '120%',
      },
    },
  },
  'active',
)
