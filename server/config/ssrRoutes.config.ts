import { PageRoutes } from 'src/infra/http'

/**
 * Dynamic Rendering / Server-side Rendering routes
 */
export const CONFIG_SSR_ROUTES: Record<string, string> = {
  // route: pages/:path
  [PageRoutes.CART]: 'Cart/Cart.server',
}
