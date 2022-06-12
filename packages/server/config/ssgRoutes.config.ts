import { PageRoutes } from 'client/src/browser/http/constants'

/**
 * Pre-Rendering / Static-Site Generation routes
 */
export const CONFIG_SSG_ROUTES: Record<string, string> = {
  // route: filename
  [PageRoutes.ABOUT]: 'about',
  [PageRoutes.COLLECTION]: 'collection',
  [PageRoutes.HELP]: 'help',
  [PageRoutes.SALES]: 'sales',
  [PageRoutes.SCHEDULE]: 'schedule',
  [PageRoutes.SETTINGS]: 'settings',
  [PageRoutes.SIGN_IN]: 'sign-in',
}
