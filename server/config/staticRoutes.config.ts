import { PageRoutes } from 'src/infra/http'

export const CONFIG_STATIC_ROUTES: Record<string, string> = {
  // route: filename
  [PageRoutes.ROOT]: 'about',
  [PageRoutes.SETTINGS]: 'settings',
}
