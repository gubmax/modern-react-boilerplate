import { RouteObject } from 'react-router'

import { PageRoutes } from 'client/src/browser/http/constants'
import { CartPage } from 'client/src/modules/pages/cart'
import { CollectionPage } from 'client/src/modules/pages/collection'
import { NotFoundPage } from 'client/src/modules/pages/notFound'
import { SalesPage } from 'client/src/modules/pages/sales'
import { SchedulePage } from 'client/src/modules/pages/schedule'
import { ShowcasePage } from 'client/src/modules/pages/showcase'
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
