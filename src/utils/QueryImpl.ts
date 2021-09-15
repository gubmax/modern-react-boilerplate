import { BehaviorSubject } from 'rxjs'

import { HttpRequestResponse, HttpRequestBody, HttpRequestInit } from 'shared/http'
import { httpRequest } from 'src/infra/http'

export enum Statuses {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  FAILURE = 'failure',
}

type Action<R extends HttpRequestResponse> =
  | { type: Statuses.LOADING }
  | { type: Statuses.SUCCESS; payload: R }
  | { type: Statuses.FAILURE; payload: unknown }

interface State<T extends unknown> {
  status: Statuses
  loading: boolean
  response?: T
  error?: unknown
}

export abstract class QueryImpl<
  R extends HttpRequestResponse = HttpRequestResponse,
  B extends HttpRequestBody = never,
> {
  state$ = new BehaviorSubject<State<R>>({
    status: Statuses.IDLE,
    loading: false,
  })

  abstract readonly init: HttpRequestInit

  get state(): State<R> {
    return this.state$.getValue()
  }

  private reduce(action: Action<R>): void {
    switch (action.type) {
      case Statuses.LOADING:
        this.state$.next({
          status: Statuses.LOADING,
          loading: true,
          response: undefined,
          error: undefined,
        })
        break

      case Statuses.SUCCESS:
        this.state$.next({
          status: Statuses.SUCCESS,
          loading: false,
          response: action.payload,
        })
        break

      case Statuses.FAILURE:
        this.state$.next({
          status: Statuses.FAILURE,
          loading: false,
          error: action.payload,
        })
        break
    }
  }

  async send(...args: B extends never ? never : [B]): Promise<R>
  async send(body?: B): Promise<R> {
    try {
      this.reduce({ type: Statuses.LOADING })
      const response = await httpRequest<R, B>(this.init, body)
      this.reduce({ type: Statuses.SUCCESS, payload: response })
      return response
    } catch (error: unknown) {
      this.reduce({ type: Statuses.FAILURE, payload: error })
      throw error
    }
  }
}
