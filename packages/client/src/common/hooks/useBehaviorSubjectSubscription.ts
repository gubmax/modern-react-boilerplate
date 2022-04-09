import { useMemo } from 'react'
import { BehaviorSubject } from 'rxjs'
import { Subscription, useSubscription } from 'use-subscription'

/**
 * Safely manages subscriptions in concurrent mode.
 * @link https://github.com/facebook/react/tree/main/packages/use-subscription
 */
export function useBehaviorSubjectSubscription<T>(behaviorSubject: BehaviorSubject<T>): T {
  const subscription = useMemo<Subscription<T>>(
    () => ({
      getCurrentValue: () => behaviorSubject.getValue(),
      subscribe: (callback) => {
        const subscription = behaviorSubject.subscribe(callback)
        return () => subscription.unsubscribe()
      },
    }),
    [behaviorSubject],
  )

  return useSubscription(subscription)
}
