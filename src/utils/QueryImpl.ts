import { HttpRequestResponse, HttpRequestBody, HttpRequestInit } from 'shared/infra/http'
import { httpRequest } from 'src/infra/http'

enum Statuses {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  FAILURE = 'failure',
}

type Action<R extends HttpRequestResponse> =
  | { type: Statuses.LOADING }
  | { type: Statuses.SUCCESS; payload: R }
  | { type: Statuses.FAILURE; payload: unknown }

export abstract class QueryImpl<
  R extends HttpRequestResponse = HttpRequestResponse,
  B extends HttpRequestBody = never,
> {
  status: Statuses = Statuses.IDLE
  abstract readonly init: HttpRequestInit
  loading = false
  response?: R
  error?: unknown

  private reduce(action: Action<R>): void {
    switch (action.type) {
      case Statuses.LOADING:
        this.status = Statuses.LOADING
        this.loading = true
        this.response = undefined
        this.error = undefined
        break

      case Statuses.SUCCESS:
        this.status = Statuses.SUCCESS
        this.loading = false
        this.response = action.payload
        break

      case Statuses.FAILURE:
        this.status = Statuses.FAILURE
        this.loading = false
        this.error = action.payload
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
