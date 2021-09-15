import { FC } from 'react'

import { cn } from 'src/common/helpers'
import { focusStyle } from 'src/styles'
import { BaseButtonProps } from './BaseButton.types'
import * as s from './BaseButton.css'

const BaseButton: FC<BaseButtonProps> = ({ children, primary, className, ...rest }) => {
  const classNames = cn(s.btn, primary ? s.primaryStyle : s.defaultStyle, focusStyle, className)
  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  )
}

export default BaseButton
