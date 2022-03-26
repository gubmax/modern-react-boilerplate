import { Module } from '@nestjs/common'

import { UserAgentParserService } from './userAgentParser.service'

@Module({
  imports: [UserAgentParserService],
  exports: [UserAgentParserService],
})
export class UserAgentParserModule {}
