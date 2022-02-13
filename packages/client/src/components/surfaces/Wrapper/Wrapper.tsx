import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { WrapperVariants } from './Wrapper.constants'
import { BaseWrapperProps, WrapperProps } from './Wrapper.types'
import * as s from './Wrapper.css'

const BaseWrapper: FC<BaseWrapperProps> = ({
  as: Tag = 'div',
  className,
  children,
  innerRef,
  variant,
  ...rest
}) => {
  return (
    <Tag className={cn(s.wrapperVariants[variant], className)} ref={innerRef} {...rest}>
      {children}
    </Tag>
  )
}

export const Wrapper: FC<WrapperProps> = (props) => (
  <BaseWrapper {...props} variant={WrapperVariants.DEFAULT} />
)

export const FlatWrapper: FC<WrapperProps> = (props) => (
  <BaseWrapper {...props} variant={WrapperVariants.FLAT} />
)

export const OutlineWrapper: FC<WrapperProps> = (props) => (
  <BaseWrapper {...props} variant={WrapperVariants.OUTLINE} />
)
