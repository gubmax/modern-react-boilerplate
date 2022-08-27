import { style } from '@vanilla-extract/css'

import { pxToRem } from 'client/src/common/helpers/pxToRem'
import { gridAtom } from 'client/src/common/styles/atomic/grid.css'
import { dt } from 'client/src/common/styles/designTokens'

export const footer = style({
  minWidth: dt.vars.size.screen.min,
  background: dt.vars.theme.color.surface0,
  borderTop: `${dt.vars.border.width.regular} solid ${dt.vars.theme.color.border}`,
})

export const wrapper = style({
  maxWidth: dt.vars.size.screen.desktop,
  margin: '0 auto',
  padding: `${dt.vars.space.s4} ${dt.vars.space.s4} 0`,

  '@media': {
    [dt.media.maxWidth.mobile]: {
      padding: `${dt.vars.space.s2} ${dt.vars.space.s2} ${pxToRem(56)}`,
    },
  },
})

export const topSection = style([
  gridAtom({ display: 'flex' }),
  {
    '@media': {
      [dt.media.maxWidth.tablet]: {
        flexDirection: 'column',
      },
    },
  },
])

export const description = style({
  width: pxToRem(400),
  paddingRight: dt.vars.space.s4,

  '@media': {
    [dt.media.maxWidth.tablet]: {
      width: '100%',
      marginBottom: dt.vars.space.s4,
      paddingRight: 'unset',
      textAlign: 'center',
    },
  },
})

export const title = style([
  dt.style.typography.h3,
  {
    marginBottom: dt.vars.space.s1,
  },
])

export const bottomSection = style([
  gridAtom({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  }),
  {
    paddingTop: dt.vars.space.s3,
    borderTop: `${dt.vars.border.width.regular} solid ${dt.vars.theme.color.borderLight}`,

    '@media': {
      [dt.media.maxWidth.mobile]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  },
])

export const links = style({
  marginBottom: dt.vars.space.s3,
})

export const bottomLink = style({
  marginRight: dt.vars.space.s3,
})

export const copyright = style({
  marginBottom: dt.vars.space.s3,

  '@media': {
    [dt.media.minWidth.mobile]: {
      marginBottom: dt.vars.space.s1,
      marginRight: dt.vars.space.s3,
    },
  },
})
