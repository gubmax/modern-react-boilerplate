import { ReactElement } from 'react'

import { WrapperProps } from 'src/components/surfaces/Wrapper'

export interface ListProps extends WrapperProps {
  children: ReactElement[]
}
