import { useMemo, useSyncExternalStore } from 'react'

import { isBrowser } from '../helpers/environment'

export function useMediaQuery(query: string, serverFallback = false): boolean {
  const getServerSnapshot = () => serverFallback

  const [getSnapshot, subscribe] = useMemo(() => {
    const mediaQueryList = isBrowser ? window.matchMedia(query) : null

    return [
      () => !!mediaQueryList?.matches,
      (onStoreChange: () => void) => {
        mediaQueryList?.addEventListener('change', onStoreChange)
        return () => {
          mediaQueryList?.removeEventListener('change', onStoreChange)
        }
      },
    ]
  }, [query])

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
