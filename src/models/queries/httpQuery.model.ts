import { injectable } from 'inversify'

import { HttpRequestResponse, HttpRequestBody, HttpRequestInit } from 'shared/http'
import { httpRequest } from 'src/infra/http'
import { QueryModel } from './query.model'

@injectable()
export abstract class HttpQueryModel<
  R extends HttpRequestResponse = HttpRequestResponse,
  B extends HttpRequestBody = never,
> extends QueryModel<R> {
  abstract readonly init: HttpRequestInit

  async send(...args: B extends never ? never : [B]): Promise<R>
  async send(body?: B): Promise<R> {
    return super.run(() => httpRequest<R, B>(this.init, body))
  }
}
