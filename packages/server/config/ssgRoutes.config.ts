import { PageRoutes } from 'client/src/browser/http/constants'

/**
 * Pre-Rendering / Static-Site Generation routes
 */
export const CONFIG_SSG_ROUTES: Record<string, string> = {
  // route: filename
  [PageRoutes.ROOT]: 'showcase',
  [PageRoutes.COLLECTION]: 'collection',
  [PageRoutes.SALES]: 'sales',
  [PageRoutes.SCHEDULE]: 'schedule',
  $$NOT_FOUND: 'notFound',
}
