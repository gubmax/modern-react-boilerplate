import { HTMLAttributes } from 'react'
import { StyledProps, AsProp } from 'src/types'

export interface WrapperProps extends StyledProps, AsProp, Omit<HTMLAttributes<unknown>, 'style'> {
  noPadding?: boolean
  onClick?(): void
}
