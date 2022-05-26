import { PageRoutes } from 'client/src/browser/http/constants'

/**
 * Dynamic Rendering / Server-side Rendering routes
 */
export const CONFIG_SSR_ROUTES: Record<string, { path?: string; imports: string[] } | undefined> = {
  // route: pages/:path
  [PageRoutes.ROOT]: {
    imports: ['src/main.tsx'],
  },
  [PageRoutes.CART]: {
    path: 'src/modules/pages/cart/dataFetching',
    imports: ['src/modules/cart/cart.chunk.ts'],
  },
}
