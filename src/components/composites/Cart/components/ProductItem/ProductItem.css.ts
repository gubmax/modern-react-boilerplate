import { style } from '@vanilla-extract/css'
import { cssCommonVars, cssThemeVars } from 'src/styles'

export const wrapper = style({
  display: 'flex',
})

export const body = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const imageBox = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  width: '8rem',
  height: '8rem',
  fontSize: '5rem',
  borderRadius: '12px',
  marginRight: cssCommonVars.space.primary,
  backgroundColor: cssThemeVars.color.bg0,
  userSelect: 'none',
})

export const price = style({
  minWidth: '3.5rem',
  fontSize: cssCommonVars.fontSize.h3,
  fontWeight: 500,
  textAlign: 'end',
  marginLeft: 'auto',
})

export const counter = style({
  width: '2.5rem',
  textAlign: 'center',
  alignSelf: 'center',
  fontSize: cssCommonVars.fontSize.h3,
})

export const marginLeft = style({
  marginLeft: 'auto',
})

export const deleteButton = style({
  marginRight: cssCommonVars.space.secondary,
})
