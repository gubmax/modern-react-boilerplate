import { FC } from 'react'

import { cn, noop } from 'src/helpers'
import { WrapperProps } from './Wrapper.types'
import * as s from './Wrapper.css'

const Wrapper: FC<WrapperProps> = ({
  as: Tag = 'div',
  className = '',
  style,
  children,
  noPadding,
  onClick = noop,
  ...rest
}) => {
  return (
    <Tag
      className={cn(s.wrapper, !noPadding && s.padding, className)}
      style={style}
      onClick={onClick}
      onKeyPress={onClick}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Wrapper
