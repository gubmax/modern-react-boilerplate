import { media } from './media'
import { adaptiveVarsContract } from './adaptive.css'
import { active } from './style/active.css'
import { focusVisiblePrimary, focusVisibleWhite } from './style/focus.css'
import { scrollbar } from './style/scrollbar.css'
import { surfaces } from './style/surfaces.css'
import { typography } from './style/typography.css'
import { systemVars } from './system.css'
import { themeVars } from './theme.css'

/**
 * Design tokens store style values, such as CSS custom properties (variables) and media queries,
 * allowing style values to be applied consistently.
 */
export const dt = {
  media,
  style: {
    active,
    focusVisible: {
      primary: focusVisiblePrimary,
      white: focusVisibleWhite,
    },
    scrollbar,
    surfaces,
    typography,
  },
  vars: {
    theme: themeVars,
    ...systemVars,
    ...adaptiveVarsContract,
  },
}
