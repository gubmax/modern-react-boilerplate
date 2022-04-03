import { FC } from 'react'

import { H2 } from 'client/src/common/components/typography/Heading'
import { GroupSliderProps } from '../GroupSlider.types'
import * as s from './GroupSliderTouch.css'

const GroupSliderTouch: FC<GroupSliderProps> = ({ className, style, title, children }) => {
  return (
    <div className={className} style={style}>
      <H2>{title}</H2>
      <div className={s.wrapper}>{children}</div>
    </div>
  )
}

export default GroupSliderTouch
