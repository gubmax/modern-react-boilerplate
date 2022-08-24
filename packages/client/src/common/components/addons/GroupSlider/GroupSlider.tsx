import { FC } from 'react'

import { useComponentVariant } from 'client/src/common/hooks/useComponentVariant'
import { GroupSliderDesktop } from './desktop'
import { GroupSliderProps } from './GroupSlider.types'
import { GroupSliderTouch } from './touch'

const GroupSlider: FC<GroupSliderProps> = ({ children, ...rest }) => {
  const Component = useComponentVariant(GroupSliderTouch, GroupSliderDesktop)
  return <Component {...rest}>{children}</Component>
}

export default GroupSlider
