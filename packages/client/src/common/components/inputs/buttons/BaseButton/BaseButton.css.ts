import { style, styleVariants } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'
import { focusStyle } from 'client/src/common/styles/shared/focusStyle.css'
import { ButtonVariants } from './BaseButton.constants'

export const baseButton = style([
  gridAtom({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  focusStyle,
  {
    width: '100%',
    borderRadius: dt.vars.borderRadius.primary,
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: dt.vars.fontSize.body1,
    fontWeight: 500,
    height: pxToRem(42),
    padding: `0 ${dt.vars.theme.color.primary}`,
  },
])

export const buttonVariants = styleVariants({
  [ButtonVariants.DEFAULT]: {
    border: 0,
    background: 'transparent',
  },
  [ButtonVariants.DEFAULT_WHITE]: {
    border: 0,
    background: 'transparent',

    ':after': { background: 'rgba(255, 255, 255, 0.25)' },
  },
  [ButtonVariants.FLAT]: {
    border: 0,
    background: dt.vars.theme.color.surface0,
  },
  [ButtonVariants.PRIMARY]: {
    border: 0,
    background: dt.vars.theme.color.accent,
    color: dt.vars.color.white,

    ':after': { background: 'rgba(255, 255, 255, 0.25)' },
  },
  [ButtonVariants.PRIMARY_WHITE]: {
    border: 0,
    background: dt.vars.color.white,
    color: dt.vars.color.black,

    ':after': { background: 'rgba(0, 0, 0, 0.1)' },
  },
  [ButtonVariants.OUTLINE]: {
    border: `${pxToRem(1.25)} solid ${dt.vars.theme.color.accent}`,
    background: 'transparent',
    color: dt.vars.theme.color.accent,
  },
  [ButtonVariants.OUTLINE_WHITE]: {
    border: `${pxToRem(1.25)} solid ${dt.vars.color.white}`,
    background: 'transparent',
    color: dt.vars.color.white,

    ':after': { background: 'rgba(255, 255, 255, 0.25)' },
  },
})
