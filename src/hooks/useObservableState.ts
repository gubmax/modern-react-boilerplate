import { useEffect, useState } from 'react'
import { Observable } from 'rxjs'

export function useObservableState<T>(observable: Observable<T>): T | undefined {
  const [state, setState] = useState<T>()

  useEffect(() => {
    const subscription = observable.subscribe(setState)
    return () => subscription.unsubscribe()
  }, [observable])

  return state
}
