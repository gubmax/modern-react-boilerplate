import { ReactElement } from 'react'

import { WrapperProps } from 'client/src/common/components/surfaces/Wrapper'

export interface ListProps extends WrapperProps {
  children: ReactElement[]
}
