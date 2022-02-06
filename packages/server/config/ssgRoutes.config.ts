import { PageRoutes } from 'client/src/infra/http/constants'

/**
 * Pre-Rendering / Static-Site Generation routes
 */
export const CONFIG_SSG_ROUTES: Record<string, string> = {
  // route: filename
  [PageRoutes.ROOT]: 'showcase',
  [PageRoutes.ABOUT]: 'about',
  [PageRoutes.SETTINGS]: 'settings',
  $$NOT_FOUND: 'notFound',
}
