import { FC } from 'react'

import { typography } from 'client/src/common/styles/shared/typography.css'
import { GroupSliderProps } from '../GroupSlider.types'
import * as s from './GroupSliderTouch.css'

const GroupSliderTouch: FC<GroupSliderProps> = ({ className, style, title, children }) => {
  return (
    <div className={className} style={style}>
      <h2 className={typography.h2}>{title}</h2>
      <div className={s.wrapper}>{children}</div>
    </div>
  )
}

export default GroupSliderTouch
