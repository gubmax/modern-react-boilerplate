import { PageRoutes } from 'src/infra/http'

export const CONFIG_STATIC_ROUTES: Record<string, string> = {
  [PageRoutes.ROOT]: 'about',
  [PageRoutes.CART]: 'cart',
}
