import { PartialRouteObject } from 'react-router'

import { AboutPage, CartPage } from 'src/components/pages'
import { PageRoutes } from 'src/infra/http'

export const ROUTES: PartialRouteObject[] = [
  { path: PageRoutes.ROOT, element: <AboutPage /> },
  { path: PageRoutes.CART, element: <CartPage /> },
]
