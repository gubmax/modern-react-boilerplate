import { BehaviorSubject } from 'rxjs'

import { QueryStatuses } from './query.constants'
import { QueryState, QueryAction } from './query.types'

export abstract class QueryModel<R> {
  readonly query$ = new BehaviorSubject<QueryState<R>>({
    status: QueryStatuses.IDLE,
    loading: false,
  })

  #reduce = (action: QueryAction<R>) => {
    switch (action.type) {
      case QueryStatuses.IDLE:
        return {
          status: QueryStatuses.IDLE,
          loading: false,
          response: undefined,
          error: undefined,
        }

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

  #dispatch = (action: QueryAction<R>): void => {
    this.query$.next(this.#reduce(action))
  }

  protected async run(callback: () => Promise<R>): Promise<R> {
    try {
      this.#dispatch({ type: QueryStatuses.LOADING })
      const res = await callback()
      this.#dispatch({ type: QueryStatuses.SUCCESS, payload: res })
      return res
    } catch (error: unknown) {
      this.#dispatch({ type: QueryStatuses.FAILURE, payload: error })
      throw error
    }
  }

  // Public

  reset(): void {
    this.#dispatch({ type: QueryStatuses.IDLE })
  }

  setLoading(): void {
    this.#dispatch({ type: QueryStatuses.LOADING })
  }
}
