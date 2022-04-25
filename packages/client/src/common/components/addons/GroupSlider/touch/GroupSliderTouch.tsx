import { Children, FC } from 'react'

import { GroupSliderProps } from '../GroupSlider.types'
import * as s from './GroupSliderTouch.css'

const GroupSliderTouch: FC<GroupSliderProps> = ({ className, style, title, children }) => {
  const childrenArr = Children.toArray(children)

  return (
    <div className={className} style={style}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.wrapper}>
        {childrenArr.map((child, i) => (
          <div key={i} className={s.item}>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GroupSliderTouch
