import { FC, useRef } from 'react'

import { useSlideTransition } from 'client/src/common/hooks/useSlideTransition'
import { H2 } from 'client/src/common/components/typography/Heading'
import { ChevronLeftIcon, ChevronRightIcon } from 'client/src/common/components/icons'
import { RoundedButton } from 'client/src/common/components/inputs/buttons/RoundedButton'
import { GroupSliderProps } from '../GroupSlider.types'
import * as s from './GroupSliderDesktop.css'

const GroupSlider: FC<GroupSliderProps> = ({ className, style, title, children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  const runTransition = useSlideTransition(wrapperRef, innerRef)

  const handlePrevButtonClick = () => runTransition(true)
  const handleNextButtonClick = () => runTransition()

  return (
    <div className={className} style={style}>
      <div className={s.header}>
        <H2 className={s.title}>{title}</H2>
        <div className={s.buttonsGroup}>
          <RoundedButton className={s.prevButton} onClick={handlePrevButtonClick}>
            <ChevronLeftIcon accent />
          </RoundedButton>
          <RoundedButton onClick={handleNextButtonClick}>
            <ChevronRightIcon accent />
          </RoundedButton>
        </div>
      </div>
      <div className={s.wrapper} ref={wrapperRef}>
        <div className={s.box} ref={innerRef}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default GroupSlider
