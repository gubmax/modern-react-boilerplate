import { ReactElement } from 'react'

import { WrapperProps } from 'client/src/components/surfaces/Wrapper'

export interface ListProps extends WrapperProps {
  children: ReactElement[]
}
