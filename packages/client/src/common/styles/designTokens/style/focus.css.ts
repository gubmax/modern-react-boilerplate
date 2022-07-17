import { styleVariants } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { systemVars } from '../system.css'
import { themeVars } from '../theme.css'

export const focus = styleVariants(
  {
    regular: {
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
        '&:focus:after, &:active:after': {
          opacity: 1,
          paddingTop: '120%',
          width: '120%',
        },
      },
    },
    bordered: {
      border: `${systemVars.border.width.regular} solid transparent`,
      borderRadius: systemVars.border.radius.regular,

      ':focus-visible': {
        boxShadow: `0 0 0 ${pxToRem(4)} ${themeVars.color.accentLight}`,
        borderColor: themeVars.color.accent,
      },
    },
  },
  'focus',
)
