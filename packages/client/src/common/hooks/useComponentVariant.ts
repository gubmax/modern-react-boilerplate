import { CLIENT_CONFIG, ClientConfig, DeviceType } from 'shared/constants/clientConfig'
import { dt } from '../styles/designTokens'
import { useInject } from './useInject'
import { useMediaQuery } from './useMediaQuery'

export function useComponentVariant<T, D>(TouchComponent: T, DesktopComponent: D): T | D {
  const { deviceType } = useInject<ClientConfig>(CLIENT_CONFIG)
  const isMobile = useMediaQuery(dt.media.maxWidth.mobile, deviceType === DeviceType.MOBILE)

  return isMobile ? TouchComponent : DesktopComponent
}
