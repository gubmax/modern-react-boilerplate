import { MouseEvent } from 'react'
import { useNavigate } from 'react-router'

import { PageRoutes } from 'client/src/browser/http/constants'
import { noop } from '../helpers/noop'

type HandleClick<T extends MouseEvent> = (event: T) => void

export function useLink<T extends MouseEvent>(
  to: PageRoutes,
  onClick: HandleClick<T> | undefined = noop,
): HandleClick<T> {
  const navigate = useNavigate()

  const handleClick = (event: T): void => {
    event.preventDefault()
    onClick(event)
    navigate(to)
  }

  return handleClick
}
