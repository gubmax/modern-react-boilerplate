import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { noop } from 'client/src/common/helpers/noop'
import { WrapperVariants } from './Wrapper.constants'
import { WrapperProps } from './Wrapper.types'
import * as s from './Wrapper.css'

const Wrapper: FC<WrapperProps> = ({
  as: Tag = 'div',
  className,
  children,
  innerRef,
  variant,
  onClick = noop,
  ...rest
}) => {
  return (
    <Tag
      className={cn(s.wrapperVariants[variant || WrapperVariants.FLAT], className)}
      onClick={onClick}
      onKeyPress={onClick}
      ref={innerRef}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Wrapper
