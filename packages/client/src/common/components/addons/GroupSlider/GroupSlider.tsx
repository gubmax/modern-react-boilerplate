import { FC } from 'react'

import { useComponentVariant } from 'client/src/common/hooks/useComponentVariant'
import { GroupSliderDesktop } from './desktop'
import { GroupSliderProps } from './GroupSlider.types'
import { GroupSliderTouch } from './touch'

const GroupSlider: FC<GroupSliderProps> = (props) => {
  const Component = useComponentVariant(GroupSliderTouch, GroupSliderDesktop)
  return <Component {...props} />
}

export default GroupSlider
