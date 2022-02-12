import { ScreenSizes } from './screen'

export const MediaQueries = {
  MIN_WIDTH_MOBILE: `screen and (min-width: ${ScreenSizes.MOBILE})`,
  MIN_WIDTH_TABLET: `screen and (min-width: ${ScreenSizes.TABLET})`,
  MIN_WIDTH_LAPTOP: `screen and (min-width: ${ScreenSizes.LAPTOP})`,
  MIN_WIDTH_DESKTOP: `screen and (min-width: ${ScreenSizes.DESKTOP})`,
  COLOR_CHEME_DARK: '(prefers-color-scheme: dark)',
  MOTION_REDUCE: '(prefers-reduced-motion: reduce)',
}
