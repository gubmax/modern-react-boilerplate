export const CLIENT_CONFIG = '__CLIENT_CONFIG__'

export enum DeviceType {
  MOBILE = 'mobile',
  DESKTOP = 'desktop',
}

export interface ClientConfig {
  /**
   * Possible type: enum DeviceType
   */
  deviceType?: string
}
