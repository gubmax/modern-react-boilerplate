import { debounce, fromEvent, interval, Observable } from 'rxjs'
import { singleton } from 'tsyringe'

import { noop } from '../helpers/noop'

const THROTTLE_TIME = 250

@singleton()
export class WindowResizeObserverModel {
  private resize$?: Observable<UIEvent>

  constructor() {
    if (typeof window === 'undefined') return

    this.resize$ = fromEvent<UIEvent>(window, 'resize').pipe(
      debounce(() => interval(THROTTLE_TIME)),
    )
  }

  subscribe = (listener: (event: UIEvent) => void): (() => void) => {
    if (!this.resize$) return noop

    const subscription = this.resize$.subscribe(listener)

    return () => subscription.unsubscribe()
  }
}
