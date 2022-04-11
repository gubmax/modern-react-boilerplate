import { useMemo, useSyncExternalStore } from 'react'
import { BehaviorSubject } from 'rxjs'

/**
 * Safely manages subscriptions in concurrent mode.
 */
export function useBehaviorSubjectSubscription<T>(behaviorSubject: BehaviorSubject<T>): T {
  const [getSnapshot, subscribe] = useMemo(() => {
    return [
      () => behaviorSubject.getValue(),
      (onStoreChange: () => void) => {
        const subscription = behaviorSubject.subscribe(onStoreChange)
        return () => subscription.unsubscribe()
      },
    ]
  }, [behaviorSubject])

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}
