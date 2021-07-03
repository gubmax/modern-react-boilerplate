import { AnchorHTMLAttributes } from 'react'

import { RefProp, StyledProps } from 'src/types'

export type AnchorProps = StyledProps &
  RefProp<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>
