import { MouseEventHandler } from 'react'

import { StyledProps } from 'client/src/common/typings'

export interface LogoProps extends StyledProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>
}
