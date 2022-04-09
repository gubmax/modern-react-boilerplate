import { FC } from 'react'

import { useInject } from 'client/src/common/hooks/useInject'
import { CLIENT_CONFIG, ClientConfig, DeviceType } from 'shared/constants/clientConfig'
import { GroupSliderDesktop } from './desktop'
import { GroupSliderProps } from './GroupSlider.types'
import { GroupSliderTouch } from './touch'

const GroupSlider: FC<GroupSliderProps> = (props) => {
  const { deviceType } = useInject<ClientConfig>(CLIENT_CONFIG)
  const Component = deviceType === DeviceType.MOBILE ? GroupSliderTouch : GroupSliderDesktop
  return <Component {...props} />
}

export default GroupSlider
