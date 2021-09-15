import { FC } from 'react'

import { cn, noop } from 'src/common/helpers'
import { Loader } from 'src/components/elements'
import { BaseButton } from '../BaseButton'
import { ButtonProps } from './Button.types'
import * as s from './Button.css'

const Button: FC<ButtonProps> = ({ children, large, loading, onClick = noop, ...rest }) => {
  function handleClick() {
    if (loading) return
    onClick()
  }

  return (
    <BaseButton className={cn(s.wrapper, large && s.large)} onClick={handleClick} {...rest}>
      {loading ? <Loader small /> : children}
    </BaseButton>
  )
}

export default Button
