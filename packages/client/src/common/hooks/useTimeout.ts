import { useState } from 'react'

import { useTimeoutCallback } from './useTimeoutCallback'

export function useTimeout(ms = 0): [boolean, () => void, () => void] {
  const [, forceUpdate] = useState({})
  return useTimeoutCallback(() => forceUpdate({}), ms)
}
