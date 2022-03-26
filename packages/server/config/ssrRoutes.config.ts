import { PageRoutes } from 'client/src/browser/http/constants'

/**
 * Dynamic Rendering / Server-side Rendering routes
 */
export const CONFIG_SSR_ROUTES: Record<string, { path?: string; imports: string[] }> = {
  // route: pages/:path
  [PageRoutes.ROOT]: {
    imports: ['src/main.tsx'],
  },
  [PageRoutes.CART]: {
    path: 'src/components/pages/Cart/Cart.server',
    imports: ['src/components/composites/Cart/cart.chunk.ts'],
  },
}
