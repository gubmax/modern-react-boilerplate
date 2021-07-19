import { ReactElement } from 'react'

import { WrapperProps } from 'src/components/surfaces'

export interface ListProps extends WrapperProps {
  children: ReactElement[]
}
