import { ElementType } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'

export const dynamicRoutes: Record<string, () => Promise<{ default: ElementType }>> = {
  [PageRoutes.CART]: () => import('client/src/modules/features/cart/cart.chunk'),
}
