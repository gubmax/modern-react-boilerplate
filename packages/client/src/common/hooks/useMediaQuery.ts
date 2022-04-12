import { useMemo, useSyncExternalStore } from 'react'

export function useMediaQuery(query: string, serverFallback = false): boolean {
  const getServerSnapshot = () => serverFallback

  const [getSnapshot, subscribe] = useMemo(() => {
    const mediaQueryList = typeof window !== 'undefined' ? window.matchMedia(query) : undefined

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
