import { FatalException } from 'src/utils/exceptions'
import { HttpRequestBody, HttpRequestInit, HttpRequestResponse } from './types'

/**
 * A wrapper for using HTTP request
 */
export async function httpRequest<
  R extends HttpRequestResponse = void,
  B extends HttpRequestBody = HttpRequestBody,
>({ input, ...init }: HttpRequestInit, body?: B): Promise<R> {
  try {
    const res = await fetch(input, { ...init, body: JSON.stringify(body) })
    const data = (await res.json()) as R
    return data
  } catch (error: unknown) {
    throw new FatalException({
      message: error instanceof Error ? error.message : '',
    })
  }
}
