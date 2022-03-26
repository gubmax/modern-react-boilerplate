import { Injectable } from '@nestjs/common'
import UAParser from 'ua-parser-js'

interface UserAgentParser {
  getDevice(): {
    /**
     * Possible type:
     * console, mobile, tablet, smarttv, wearable, embedded
     */
    type?: string
  }
}

@Injectable()
export class UserAgentParserService {
  create(userAgent?: string): UserAgentParser {
    return new UAParser(userAgent)
  }
}
