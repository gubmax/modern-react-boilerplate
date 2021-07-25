import { FC } from 'react'

import { cn } from 'src/helpers'
import { BaseButtonProps } from './BaseButton.types'
import { rippleEffect } from 'src/styles/rippleEffect.css'
import * as s from './BaseButton.css'

const BaseButton: FC<BaseButtonProps> = ({ children, primary, className, ...rest }) => {
  const classNames = cn(s.btn, primary ? s.primaryStyle : s.defaultStyle, rippleEffect, className)
  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  )
}

export default BaseButton
