import { MouseEvent } from 'react'
import { useNavigate } from 'react-router'

import { PageRoutes } from 'src/infra/http'
import { noop } from '../helpers'

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
