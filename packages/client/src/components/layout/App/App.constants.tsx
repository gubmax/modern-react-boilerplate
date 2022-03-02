import { RouteObject } from 'react-router'

import { CartPage } from 'client/src/components/pages/Cart'
import { CollectionPage } from 'client/src/components/pages/Collection'
import { NotFoundPage } from 'client/src/components/pages/NotFound'
import { SchedulePage } from 'client/src/components/pages/Schedule'
import { SalesPage } from 'client/src/components/pages/Sales'
import { ShowcasePage } from 'client/src/components/pages/Showcase'
import { PageRoutes } from 'client/src/browser/http/constants'
import { Main } from '../Main'

export const ROUTES: RouteObject[] = [
  {
    path: PageRoutes.ROOT,
    element: <Main />,
    children: [
      { path: PageRoutes.ROOT, element: <ShowcasePage /> },
      { path: PageRoutes.CART, element: <CartPage /> },
      { path: PageRoutes.COLLECTION, element: <CollectionPage /> },
      { path: PageRoutes.SALES, element: <SalesPage /> },
      { path: PageRoutes.SCHEDULE, element: <SchedulePage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]
