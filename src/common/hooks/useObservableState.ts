import { useEffect, useState } from 'react'
import { Observable } from 'rxjs'

export function useObservableState<T>(observable: Observable<T>): void {
  const [, setState] = useState<T>()

  useEffect(() => {
    const subscription = observable.subscribe(setState)
    return () => subscription.unsubscribe()
  }, [observable])
}
