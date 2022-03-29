import { debounce, EMPTY, fromEvent, interval, Observable } from 'rxjs'
import { singleton } from 'tsyringe'

const THROTTLE_TIME = 250

@singleton()
export class WindowResizeObserverModel {
  readonly resize$: Observable<UIEvent>

  constructor() {
    if (typeof window === 'undefined') {
      this.resize$ = EMPTY
      return
    }

    this.resize$ = fromEvent<UIEvent>(window, 'resize').pipe(
      debounce(() => interval(THROTTLE_TIME)),
    )
  }
}
