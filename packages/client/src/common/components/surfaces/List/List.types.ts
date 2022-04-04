import { ReactElement } from 'react'

import { AsProp, StyledProps } from 'client/src/common/typings'

export interface ListProps extends StyledProps, AsProp<'div' | 'section'> {
  children: ReactElement[]
}
