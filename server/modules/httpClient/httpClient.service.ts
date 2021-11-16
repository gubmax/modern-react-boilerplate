import fetch from 'node-fetch'
import { Injectable, Logger } from '@nestjs/common'

import { HttpClientImpl, HttpRequestBody, HttpRequestInit, HttpRequestResponse } from 'shared/http'
import { InternalServerException } from 'shared/exceptions'
import { CONFIG_ENV } from 'server/config'
import { TransportMarks, Transports } from 'server/common/constants'

@Injectable()
export class HttpClientService implements HttpClientImpl {
  private logger = new Logger()

  async send<R extends HttpRequestResponse = void, B extends HttpRequestBody = HttpRequestBody>(
    { input, ...init }: HttpRequestInit,
    body?: B,
  ): Promise<R> {
    try {
      this.logger.verbose({
        transport: Transports.HTTP,
        msg: TransportMarks.REQ_INTERNAL,
        url: input,
        method: init.method,
      })

      const now = Date.now()
      const res = await fetch(`${CONFIG_ENV.host}${input}`, {
        ...init,
        body: JSON.stringify(body),
      } as never)
      const data = (await res.json()) as R

      this.logger.log({
        transport: Transports.HTTP,
        msg: TransportMarks.RES_INTERNAL,
        url: input,
        method: init.method,
        statusCode: res.status,
        executionTime: Date.now() - now,
      })

      return data
    } catch (error: unknown) {
      throw new InternalServerException(error instanceof Error ? error.message : '')
    }
  }
}
