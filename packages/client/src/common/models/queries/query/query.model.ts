import { BehaviorSubject } from 'rxjs'

import { QueryStatuses } from './query.constants'
import { QueryState, QueryAction } from './query.types'

export abstract class QueryModel<R> {
  readonly state$ = new BehaviorSubject<QueryState<R>>({
    status: QueryStatuses.IDLE,
    loading: false,
  })

  #getActionState = (action: QueryAction<R>) => {
    switch (action.type) {
      case QueryStatuses.LOADING:
        return {
          status: QueryStatuses.LOADING,
          loading: true,
          response: undefined,
          error: undefined,
        }

      case QueryStatuses.SUCCESS:
        return {
          status: QueryStatuses.SUCCESS,
          loading: false,
          response: action.payload,
        }

      case QueryStatuses.FAILURE:
        return {
          status: QueryStatuses.FAILURE,
          loading: false,
          error: action.payload,
        }
    }
  }

  #reduce = (action: QueryAction<R>): void => {
    this.state$.next(this.#getActionState(action))
  }

  setLoading(): void {
    this.#reduce({ type: QueryStatuses.LOADING })
  }

  protected async run(callback: () => Promise<R>): Promise<R> {
    try {
      this.#reduce({ type: QueryStatuses.LOADING })
      const res = await callback()
      this.#reduce({ type: QueryStatuses.SUCCESS, payload: res })
      return res
    } catch (error: unknown) {
      this.#reduce({ type: QueryStatuses.FAILURE, payload: error })
      throw error
    }
  }
}
