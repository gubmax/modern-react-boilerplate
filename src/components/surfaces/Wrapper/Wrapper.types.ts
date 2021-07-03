import { StyledProps, AsProp, RefProp } from 'src/types'

export interface WrapperProps extends StyledProps, AsProp<'div' | 'main'>, RefProp<HTMLDivElement> {
  noPadding?: boolean
  onClick?(): void
}
