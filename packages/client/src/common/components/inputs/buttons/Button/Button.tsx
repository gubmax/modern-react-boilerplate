import { FC, MouseEvent } from 'react'

import { Loader } from 'client/src/common/components/elements/Loader'
import { cn } from 'client/src/common/helpers/classNames'
import { noop } from 'client/src/common/helpers/noop'
import { BaseButton } from '../BaseButton'
import { ButtonProps } from './Button.types'
import * as s from './Button.css'

const Button: FC<ButtonProps> = ({ children, large, loading, onClick = noop, ...rest }) => {
  function handleClick<T extends MouseEvent>(event: T) {
    if (loading) return
    onClick(event)
  }

  return (
    <BaseButton className={cn(s.wrapper, large && s.large)} onClick={handleClick} {...rest}>
      {loading ? <Loader small /> : children}
    </BaseButton>
  )
}

export default Button
