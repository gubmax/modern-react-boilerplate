import { useEffect, useLayoutEffect } from 'react'

import { isBrowser } from '../helpers/environment'

export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect
