import { injectable } from 'inversify'
import { BehaviorSubject } from 'rxjs'

import { Query, QueryState, QueryStatuses } from 'src/domain/query'

@injectable()
export abstract class QueryModel<R extends unknown = unknown> {
  readonly #query = new Query<R>()
  readonly state$ = new BehaviorSubject<QueryState<R>>(this.#query.state)

  constructor() {
    this.#query.listener = (state) => {
      this.state$.next(state)
    }
  }

  get state(): QueryState<R> {
    return this.state$.getValue()
  }

  setInitialLoading(): void {
    this.#query.reduce({ type: QueryStatuses.LOADING })
  }

  protected async run(callback: () => Promise<R>): Promise<R> {
    try {
      this.#query.reduce({ type: QueryStatuses.LOADING })
      const res = await callback()
      this.#query.reduce({ type: QueryStatuses.SUCCESS, payload: res })
      return res
    } catch (error: unknown) {
      this.#query.reduce({ type: QueryStatuses.FAILURE, payload: error })
      throw error
    }
  }
}
