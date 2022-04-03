import { HttpRequestResponse, HttpRequestBody, HttpRequestInit } from 'shared/http/types'
import { HttpClientModel } from '../../httpClient.model'
import { QueryModel } from '../query'

export abstract class HttpQueryModel<
  R extends HttpRequestResponse = HttpRequestResponse,
  B extends HttpRequestBody = never,
> extends QueryModel<R> {
  constructor(
    protected readonly httpClientModel: HttpClientModel,
    protected readonly init: HttpRequestInit,
  ) {
    super()
  }

  async send(...args: B extends never ? never : [B]): Promise<R>
  async send(body?: B): Promise<R> {
    return super.run(() => this.httpClientModel.send<R, B>(this.init, body))
  }
}
