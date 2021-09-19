import { noop } from 'src/common/helpers'
import { QueryStatuses } from './Query.constants'
import { QueryAction, QueryState } from './Query.types'

export class Query<R extends unknown | undefined = undefined> {
  #state: QueryState<R> = {
    status: QueryStatuses.IDLE,
    loading: false,
  }

  get state(): QueryState<R> {
    return this.#state
  }

  set state(val: QueryState<R>) {
    this.#state = val
    this.listener(val)
  }

  listener: <T extends QueryState<R>>(val: T) => void = noop

  reduce(action: QueryAction<R>): void {
    switch (action.type) {
      case QueryStatuses.LOADING:
        this.state = {
          status: QueryStatuses.LOADING,
          loading: true,
          value: undefined,
          error: undefined,
        }
        break

      case QueryStatuses.SUCCESS:
        this.state = {
          status: QueryStatuses.SUCCESS,
          loading: false,
          value: action.payload,
        }
        break

      case QueryStatuses.FAILURE:
        this.state = {
          status: QueryStatuses.FAILURE,
          loading: false,
          error: action.payload,
        }
        break
    }
  }
}
