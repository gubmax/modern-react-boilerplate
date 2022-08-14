import { Location, useLocation as useRouterLocation } from 'react-router'

import { NavigationState } from '../../typings'

interface BrowserLocation extends Location {
  state: NavigationState | null
}

export const useLocation = useRouterLocation as () => BrowserLocation
