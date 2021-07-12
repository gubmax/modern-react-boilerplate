import { PartialRouteObject } from 'react-router'

import { AboutPage } from 'src/components/pages/AboutPage'
import { CartPage } from 'src/components/pages/CartPage'
import { PageRoutes } from 'src/infra/http'

export const ROUTES: PartialRouteObject[] = [
  { path: PageRoutes.ROOT, element: <AboutPage /> },
  { path: PageRoutes.CART, element: <CartPage /> },
]
