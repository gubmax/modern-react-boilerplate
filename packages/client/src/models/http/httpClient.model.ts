import { singleton } from 'tsyringe'

import { HttpClientImpl, HttpRequestBody, HttpRequestInit, HttpRequestResponse } from 'shared/http'
import { HEADERS_DEFAULT } from 'client/src/infra/http'
import { FatalException } from 'client/src/domain/exceptions'

@singleton()
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
      const data = (await res.json()) as R
      return data
    } catch (error: unknown) {
      throw new FatalException({
        message: error instanceof Error ? error.message : '',
      })
    }
  }
}
