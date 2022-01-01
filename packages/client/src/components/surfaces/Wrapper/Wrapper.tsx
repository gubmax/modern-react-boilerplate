import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { noop } from 'client/src/common/helpers/noop'
import { WrapperProps } from './Wrapper.types'
import * as s from './Wrapper.css'

const Wrapper: FC<WrapperProps> = ({
  as: Tag = 'div',
  className,
  children,
  noPadding,
  innerRef,
  onClick = noop,
  ...rest
}) => {
  return (
    <Tag
      className={cn(s.wrapper, !noPadding && s.padding, className)}
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
