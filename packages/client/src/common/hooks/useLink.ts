import { SyntheticEvent } from 'react'
import { useNavigate } from 'react-router'

import type { NavigateOptions } from '../typings'
import { useEvent } from './useEvent'

interface UseLinkOptions {
  background?: boolean
}

export function useLink<T extends Element>(
  to = '',
  { background }: UseLinkOptions = {},
): (event?: SyntheticEvent<T>) => void {
  const navigate = useNavigate()

  return useEvent((event) => {
    event?.preventDefault()

    const options: NavigateOptions = {
      state: {
        backgroundLocation: typeof window !== 'undefined' && background ? location.pathname : '',
      },
    }

    navigate(to, options)
  })
}
