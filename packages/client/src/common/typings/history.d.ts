import { NavigateOptions as Options } from 'react-router'

export interface NavigationState {
  backgroundLocation?: string
}

export interface NavigateOptions extends Options {
  replace?: boolean
  state?: NavigationState
}
