import { ReactElement } from 'react'

import { WrapperProps } from 'client/src/components/surfaces'

export interface ListProps extends WrapperProps {
  children: ReactElement[]
}
