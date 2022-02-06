import { RouteObject } from 'react-router'

import { AboutPage } from 'client/src/components/pages/About'
import { CartPage } from 'client/src/components/pages/Cart'
import { NotFoundPage } from 'client/src/components/pages/NotFound'
import { SettingsPage } from 'client/src/components/pages/Settings'
import { ShowcasePage } from 'client/src/components/pages/Showcase'
import { PageRoutes } from 'client/src/infra/http/constants'
import { Main } from '../Main'

export const ROUTES: RouteObject[] = [
  {
    path: PageRoutes.ROOT,
    element: <Main />,
    children: [
      { path: PageRoutes.ROOT, element: <ShowcasePage /> },
      { path: PageRoutes.ABOUT, element: <AboutPage /> },
      { path: PageRoutes.CART, element: <CartPage /> },
      { path: PageRoutes.SETTINGS, element: <SettingsPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]
