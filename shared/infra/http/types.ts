import { HttpRequestMethods } from './constants'

export type HttpRequestBody = unknown
export type HttpRequestResponse = unknown | void

export interface HttpRequestInit<T extends RequestInfo = RequestInfo> {
  readonly input: T
  readonly method?: HttpRequestMethods
  readonly headers?: Headers
}
