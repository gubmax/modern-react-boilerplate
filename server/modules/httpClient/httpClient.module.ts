import { Module } from '@nestjs/common'

import { HttpClientService } from './httpClient.service'

@Module({
  imports: [HttpClientService],
  exports: [HttpClientService],
})
export class HttpClientModule {}
