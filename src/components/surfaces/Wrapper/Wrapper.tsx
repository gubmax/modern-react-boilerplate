import { FC } from 'react'

import { noop } from 'src/helpers'
import { WrapperProps } from './Wrapper.types'

import s from './Wrapper.styles'

const Wrapper: FC<WrapperProps> = ({
  as: Tag = 'div',
  className = '',
  style,
  children,
  noPadding,
  innerRef,
  onClick = noop,
  ...rest
}) => {
  return (
    <Tag
      css={[s.wrapper, !noPadding && s.padding, style]}
      className={className}
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
