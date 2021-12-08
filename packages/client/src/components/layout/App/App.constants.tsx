import { RouteObject } from 'react-router'
import { AboutPage, CartPage, NotFoundPage, SettingsPage } from 'client/src/components/pages'

import { PageRoutes } from 'client/src/infra/http'
import { Main } from '../Main'

export const ROUTES: RouteObject[] = [
  {
    path: PageRoutes.ROOT,
    element: <Main />,
    children: [
      { path: PageRoutes.ROOT, element: <AboutPage /> },
      { path: PageRoutes.CART, element: <CartPage /> },
      { path: PageRoutes.SETTINGS, element: <SettingsPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]
