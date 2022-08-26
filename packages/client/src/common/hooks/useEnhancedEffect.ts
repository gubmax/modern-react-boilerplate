import { useEffect, useLayoutEffect } from 'react'

import { isBrowser } from '../helpers/environment'

export const useEnhancedEffect = isBrowser ? useLayoutEffect : useEffect
