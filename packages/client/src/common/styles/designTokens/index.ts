import { adaptiveVarsContract } from './adaptive.css'
import { MEDIA } from './media'
import { systemVars } from './system.css'
import { themeVars } from './theme.css'

/**
 * Design tokens store style values, such as CSS custom properties (variables) and media queries,
 * allowing style values to be applied consistently.
 */
export const dt = {
  vars: {
    theme: themeVars,
    ...systemVars,
    ...adaptiveVarsContract,
  },
  media: MEDIA,
}
