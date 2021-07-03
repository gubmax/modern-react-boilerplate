import { PartialRouteObject } from 'react-router'

import { HomePage } from 'src/components/pages/HomePage'
import { CartPage } from 'src/components/pages/CartPage'
import { PageRoutes } from 'src/infra/http'

export const ROUTES: PartialRouteObject[] = [
  { path: PageRoutes.ROOT, element: <HomePage /> },
  { path: PageRoutes.CART, element: <CartPage /> },
]
