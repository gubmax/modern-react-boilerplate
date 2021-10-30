import { PageRoutes } from 'src/infra/http'

const PATH_CHUNK_CART = 'src/components/composites/Cart/cart.chunk.ts'

/**
 * Dynamic Rendering / Server-side Rendering routes
 */
export const CONFIG_SSR_ROUTES: Record<string, { path: string; imports?: string[] }> = {
  // route: pages/:path
  [PageRoutes.CART]: {
    path: 'Cart/Cart.server',
    imports: [PATH_CHUNK_CART],
  },
}
