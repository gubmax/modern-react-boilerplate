import { ElementType } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'

export const dynamicRoutes: Record<string, () => Promise<{ default: ElementType }>> = {
  [PageRoutes.CART]: () => import('client/src/components/composites/Cart/cart.chunk'),
}
