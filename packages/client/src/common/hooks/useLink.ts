import { SyntheticEvent, useCallback } from 'react'
import { useNavigate } from 'react-router'

import type { NavigateOptions } from '../typings'

export function useLink<T extends Element>(
  to = '',
  options?: NavigateOptions,
): (event?: SyntheticEvent<T>) => void {
  const navigate = useNavigate()

  return useCallback(
    (event) => {
      event?.preventDefault()
      navigate(to, options)
    },
    [navigate, options, to],
  )
}
