import { HttpRequestMethods } from './constants'

export type HttpRequestBody = unknown
export type HttpRequestResponse = unknown | void

export interface HttpRequestInit<T extends string = string> {
  readonly input: T
  readonly method?: HttpRequestMethods
  readonly headers?: Headers
}

export interface HttpClientImpl {
  send<R extends HttpRequestResponse = void, B extends HttpRequestBody = HttpRequestBody>(
    init: HttpRequestInit,
    body?: B,
  ): Promise<R>
}
