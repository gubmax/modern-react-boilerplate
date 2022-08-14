import { createContext } from 'react'
import { Location } from 'history'

export const LocationContext = createContext<Location | Record<string, never>>({})
