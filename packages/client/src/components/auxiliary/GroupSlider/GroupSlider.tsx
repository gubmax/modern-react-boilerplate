import { FC } from 'react'

import { ClientConfig, CLIENT_CONFIG, DeviceType } from 'shared/constants/clientConfig'
import { useInject } from 'client/src/common/hooks/useInject'
import { GroupSliderDesktop } from './desktop'
import { GroupSliderTouch } from './touch'
import { GroupSliderProps } from './GroupSlider.types'

const GroupSlider: FC<GroupSliderProps> = (props) => {
  const { deviceType } = useInject<ClientConfig>(CLIENT_CONFIG)
  const Component = deviceType === DeviceType.MOBILE ? GroupSliderTouch : GroupSliderDesktop
  return <Component {...props} />
}

export default GroupSlider
