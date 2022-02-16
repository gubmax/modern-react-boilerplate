import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { WrapperVariants } from './Wrapper.constants'
import { BaseWrapperProps, WrapperProps } from './Wrapper.types'
import * as s from './Wrapper.css'

const baseWrapper: FC<BaseWrapperProps> = ({
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

export const Wrapper: FC<WrapperProps> = (props) =>
  baseWrapper({ ...props, variant: WrapperVariants.DEFAULT })

export const FlatWrapper: FC<WrapperProps> = (props) =>
  baseWrapper({ ...props, variant: WrapperVariants.FLAT })

export const GlassWrapper: FC<WrapperProps> = (props) =>
  baseWrapper({ ...props, variant: WrapperVariants.GLASS })

export const OutlineWrapper: FC<WrapperProps> = (props) =>
  baseWrapper({ ...props, variant: WrapperVariants.OUTLINE })
