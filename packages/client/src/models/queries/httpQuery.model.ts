import { HttpRequestResponse, HttpRequestBody, HttpRequestInit } from 'shared/http'
import { HttpClientModel } from '../http'
import { QueryModel } from './query.model'

export abstract class HttpQueryModel<
  R extends HttpRequestResponse = HttpRequestResponse,
  B extends HttpRequestBody = never,
> extends QueryModel<R> {
  abstract readonly init: HttpRequestInit

  constructor(protected readonly httpClientModel: HttpClientModel) {
    super()
  }

  async send(...args: B extends never ? never : [B]): Promise<R>
  async send(body?: B): Promise<R> {
    return super.run(() => this.httpClientModel.send<R, B>(this.init, body))
  }
}
