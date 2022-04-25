import { Children, FC, useRef } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from 'client/src/common/components/icons'
import { ButtonVariants } from 'client/src/common/components/inputs/buttons/BaseButton'
import { RoundedButton } from 'client/src/common/components/inputs/buttons/RoundedButton'
import { useSlideTransition } from 'client/src/common/hooks/useSlideTransition'
import { typography } from 'client/src/common/styles/shared/typography.css'
import { GroupSliderProps } from '../GroupSlider.types'
import * as s from './GroupSliderDesktop.css'

const GroupSlider: FC<GroupSliderProps> = ({ className, style, title, children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  const runTransition = useSlideTransition(wrapperRef, innerRef)

  const handlePrevButtonClick = () => runTransition(true)
  const handleNextButtonClick = () => runTransition()

  const childrenArr = Children.toArray(children)

  return (
    <div className={className} style={style}>
      <div className={s.header}>
        <h2 className={typography.h2}>{title}</h2>
        <div className={s.buttonsGroup}>
          <RoundedButton
            variant={ButtonVariants.FLAT}
            className={s.prevButton}
            onClick={handlePrevButtonClick}
          >
            <ChevronLeftIcon />
          </RoundedButton>
          <RoundedButton variant={ButtonVariants.FLAT} onClick={handleNextButtonClick}>
            <ChevronRightIcon />
          </RoundedButton>
        </div>
      </div>
      <div className={s.wrapper} ref={wrapperRef}>
        <div className={s.box} ref={innerRef}>
          {childrenArr.map((child, i) => (
            <div key={i} className={s.item}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GroupSlider
