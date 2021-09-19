import { PageRoutes } from 'src/infra/http'

/**
 * Pre-Rendering / Static-Site Generation routes
 */
export const CONFIG_SSG_ROUTES: Record<string, string> = {
  // route: filename
  [PageRoutes.ROOT]: 'about',
  [PageRoutes.SETTINGS]: 'settings',
  '*': 'notFound',
}
