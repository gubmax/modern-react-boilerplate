import { Module } from '@nestjs/common'

import { UserAgentParserModule } from '../userAgentParser'
import { ClientConfigService } from './clientConfig.service'

@Module({
  imports: [UserAgentParserModule],
  providers: [ClientConfigService],
  exports: [ClientConfigService],
})
export class ClientConfigModule {}
