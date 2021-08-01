import { HttpRequestMethods } from './constants'

export type HttpRequestBody = unknown
export type HttpRequestResponse = unknown | void

export interface HttpRequestInit {
  readonly input: RequestInfo
  readonly method?: HttpRequestMethods
  readonly headers?: Headers
}
