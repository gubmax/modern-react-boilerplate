import { style, styleVariants } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'
import { ButtonVariants } from './BaseButton.constants'

export const baseButton = style([
  dt.style.active,
  gridAtom({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  {
    width: '100%',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: dt.vars.fontSize.body1,
    fontWeight: 500,
    height: pxToRem(40),
    padding: `0 ${dt.vars.theme.color.primary}`,
  },
])

export const buttonVariants = styleVariants({
  [ButtonVariants.DEFAULT]: [
    dt.style.focusVisible.primary,
    {
      background: 'transparent',
    },
  ],
  [ButtonVariants.DEFAULT_WHITE]: [
    dt.style.focusVisible.white,
    {
      background: 'transparent',

      ':after': { background: 'rgba(255, 255, 255, 0.25)' },
    },
  ],
  [ButtonVariants.FLAT]: [
    dt.style.focusVisible.primary,
    {
      border: `${dt.vars.border.width.regular} solid ${dt.vars.theme.color.border}`,
      background: dt.vars.theme.color.surface0,
    },
  ],
  [ButtonVariants.PRIMARY]: [
    dt.style.focusVisible.primary,
    {
      border: 0,
      background: dt.vars.theme.color.accent,
      color: dt.vars.color.white,

      ':after': { background: 'rgba(255, 255, 255, 0.25)' },
    },
  ],
  [ButtonVariants.PRIMARY_WHITE]: [
    dt.style.focusVisible.white,
    {
      border: 0,
      background: dt.vars.color.white,
      color: dt.vars.color.black,

      ':after': { background: 'rgba(0, 0, 0, 0.1)' },
    },
  ],
  [ButtonVariants.OUTLINE]: [
    dt.style.focusVisible.primary,
    {
      border: `${dt.vars.border.width.regular} solid ${dt.vars.theme.color.accent}`,
      background: 'transparent',
      color: dt.vars.theme.color.accent,
    },
  ],
  [ButtonVariants.OUTLINE_WHITE]: [
    dt.style.focusVisible.white,
    {
      border: `${dt.vars.border.width.regular} solid ${dt.vars.color.white}`,
      background: 'transparent',
      color: dt.vars.color.white,

      ':after': { background: 'rgba(255, 255, 255, 0.25)' },
    },
  ],
})
