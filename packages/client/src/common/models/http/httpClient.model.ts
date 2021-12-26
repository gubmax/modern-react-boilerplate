import { injectable } from 'tsyringe'

import { HttpClientImpl, HttpRequestBody, HttpRequestInit, HttpRequestResponse } from 'shared/http'
import { HEADERS_DEFAULT } from 'client/src/infra/http'
import { FatalException } from 'client/src/common/domain/exceptions'

@injectable()
export class HttpClientModel implements HttpClientImpl {
  async send<R extends HttpRequestResponse = void, B extends HttpRequestBody = HttpRequestBody>(
    { input, headers, ...init }: HttpRequestInit,
    body?: B,
  ): Promise<R> {
    try {
      const res = await fetch(input, {
        ...init,
        headers: headers || HEADERS_DEFAULT,
        body: JSON.stringify(body),
      })

      const contentType = res.headers.get('content-type')
      const promise =
        !!contentType && contentType.indexOf('application/json') !== -1 ? res.json() : res.text()

      return promise as Promise<R>
    } catch (error: unknown) {
      throw new FatalException({
        message: error instanceof Error ? error.message : '',
      })
    }
  }
}
