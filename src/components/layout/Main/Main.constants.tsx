import { RouteObject } from 'react-router'

import { AboutPage, CartPage, SettingsPage } from 'src/components/pages'
import { PageRoutes } from 'src/infra/http'

export const ROUTES: RouteObject[] = [
  { path: PageRoutes.ROOT, element: <AboutPage /> },
  { path: PageRoutes.CART, element: <CartPage /> },
  { path: PageRoutes.SETTINGS, element: <SettingsPage /> },
]
