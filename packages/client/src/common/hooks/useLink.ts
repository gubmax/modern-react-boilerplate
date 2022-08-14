import { SyntheticEvent } from 'react'
import { useNavigate } from 'react-router'

import { isBrowser } from '../helpers/environment'
import type { NavigateOptions } from '../typings'
import { useLocation } from './history/useLocation'
import { useEvent } from './useEvent'

interface UseLinkOptions {
  background?: boolean
}

export function useLink<T extends Element>(
  to = '',
  { background }: UseLinkOptions = {},
): (event?: SyntheticEvent<T>) => void {
  const { state, pathname } = useLocation()
  const navigate = useNavigate()

  return useEvent((event) => {
    event?.preventDefault()

    let backgroundLocation = ''

    if (isBrowser && background) {
      backgroundLocation = state?.backgroundLocation ? state.backgroundLocation : pathname
    }

    const options: NavigateOptions = {
      state: { backgroundLocation },
    }

    navigate(to, options)
  })
}
