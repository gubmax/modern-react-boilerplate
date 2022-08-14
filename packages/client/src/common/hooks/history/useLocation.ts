import { useContext } from 'react'
import { Location } from 'react-router'

import { LocationContext } from '../../contexts/LocationContext'
import { NavigationState } from '../../typings'

interface BrowserLocation extends Location {
  state: NavigationState | null
}

export function useLocation(): BrowserLocation {
  return useContext(LocationContext) as BrowserLocation
}
