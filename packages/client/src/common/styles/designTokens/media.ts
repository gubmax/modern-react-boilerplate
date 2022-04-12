import { SCREEN_SIZES } from '../constants/screens'

export const MEDIA = {
  minWidth: {
    mobile: `screen and (min-width: ${SCREEN_SIZES.mobile})`,
    tablet: `screen and (min-width: ${SCREEN_SIZES.tablet})`,
    laptop: `screen and (min-width: ${SCREEN_SIZES.laptop})`,
    desktop: `screen and (min-width: ${SCREEN_SIZES.desktop})`,
  },
  maxWidth: {
    mobile: `screen and (max-width: ${SCREEN_SIZES.mobile})`,
    tablet: `screen and (max-width: ${SCREEN_SIZES.tablet})`,
    laptop: `screen and (max-width: ${SCREEN_SIZES.laptop})`,
    desktop: `screen and (max-width: ${SCREEN_SIZES.desktop})`,
  },
  prefersColorScheme: {
    dark: '(prefers-color-scheme: dark)',
  },
  prefersReducedMotion: {
    reduce: '(prefers-reduced-motion: reduce)',
  },
} as const
