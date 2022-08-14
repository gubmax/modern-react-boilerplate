import { RouteObject } from 'react-router'

import { PageRoutes } from 'client/src/browser/http/constants'
import { NotFound } from 'client/src/modules/layout/notFound'
import { AboutPage } from 'client/src/modules/pages/about'
import { CartPage } from 'client/src/modules/pages/cart'
import { CollectionPage } from 'client/src/modules/pages/collection'
import { HelpPage } from 'client/src/modules/pages/help'
import { NotFoundPage } from 'client/src/modules/pages/notFound'
import { SalesPage } from 'client/src/modules/pages/sales'
import { SchedulePage } from 'client/src/modules/pages/schedule'
import { SettingsPage } from 'client/src/modules/pages/settings'
import { ShowcasePage } from 'client/src/modules/pages/showcase'
import { SignInBackgroundPage, SignInPage } from 'client/src/modules/pages/signIn'
import { SignUpBackgroundPage, SignUpPage } from 'client/src/modules/pages/signUp'
import { Main } from '../Main'

export const ROUTES: RouteObject[] = [
  {
    path: PageRoutes.ROOT,
    element: <Main />,
    children: [
      { path: PageRoutes.ROOT, element: <ShowcasePage /> },
      { path: PageRoutes.ABOUT, element: <AboutPage /> },
      { path: PageRoutes.CART, element: <CartPage /> },
      { path: PageRoutes.COLLECTION, element: <CollectionPage /> },
      { path: PageRoutes.HELP, element: <HelpPage /> },
      { path: PageRoutes.SALES, element: <SalesPage /> },
      { path: PageRoutes.SCHEDULE, element: <SchedulePage /> },
      { path: PageRoutes.SETTINGS, element: <SettingsPage /> },
    ],
  },
  { path: PageRoutes.SIGN_IN, element: <SignInPage /> },
  { path: PageRoutes.SIGN_UP, element: <SignUpPage /> },
  { path: '*', element: <NotFoundPage /> },
]

export const BACKGROUND_ROUTES: RouteObject[] = [
  { path: PageRoutes.SIGN_IN, element: <SignInBackgroundPage /> },
  { path: PageRoutes.SIGN_UP, element: <SignUpBackgroundPage /> },
  { path: '*', element: <NotFound /> },
]
