import { PageRoutes } from 'src/infra/http'

export const CONFIG_GENERATED_ROUTES: Record<string, string> = {
  // route: pages/:path
  [PageRoutes.CART]: 'Cart/Cart.server',
}
