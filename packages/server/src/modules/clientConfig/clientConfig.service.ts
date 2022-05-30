import { Inject, Injectable } from '@nestjs/common'
import type { Request } from 'express'

import { ClientConfig, DeviceType } from 'shared/constants/clientConfig'
import { UserAgentParserService } from '../userAgentParser'

@Injectable()
export class ClientConfigService {
  constructor(
    @Inject(UserAgentParserService) private readonly userAgentParser: UserAgentParserService,
  ) {}

  private getDeviceType(req: Request): string {
    const userAgent = this.userAgentParser.create(req.headers['user-agent'])
    const { type } = userAgent.getDevice()
    return type ?? DeviceType.DESKTOP
  }

  create(req: Request): ClientConfig {
    return {
      deviceType: this.getDeviceType(req),
    }
  }
}
