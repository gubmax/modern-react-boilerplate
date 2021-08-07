import { FatalException } from 'src/domain/exceptions'

import { HttpRequestBody, HttpRequestInit, HttpRequestResponse } from 'shared/infra/http'
import { HEADERS_DEFAULT } from './constants'

/**
 * A wrapper for using HTTP request
 */
export async function httpRequest<
  R extends HttpRequestResponse = void,
  B extends HttpRequestBody = HttpRequestBody,
>({ input, headers, ...init }: HttpRequestInit, body?: B): Promise<R> {
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
