import { Module } from '@nestjs/common'

import { UserAgentParserService } from './userAgentParser.service'

@Module({
  providers: [UserAgentParserService],
  exports: [UserAgentParserService],
})
export class UserAgentParserModule {}
