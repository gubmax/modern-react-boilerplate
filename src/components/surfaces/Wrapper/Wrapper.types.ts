import { StyledProps, AsProp } from 'src/types'

export interface WrapperProps extends StyledProps, AsProp {
  noPadding?: boolean
  onClick?(): void
}
