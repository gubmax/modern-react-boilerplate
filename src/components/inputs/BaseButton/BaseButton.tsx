import { FC } from 'react'

import { cn } from 'src/helpers'
import { BaseButtonProps } from './BaseButton.types'
import * as s from './BaseButton.css'

const BaseButton: FC<BaseButtonProps> = ({ children, primary, className, ...rest }) => {
  return (
    <button className={cn(s.btn, primary ? s.primaryStyle : s.defaultStyle, className)} {...rest}>
      {children}
    </button>
  )
}

export default BaseButton
