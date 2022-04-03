import { AnchorHTMLAttributes } from 'react'

import { RefProp, StyledProps } from 'client/src/common/typings'

export type AnchorProps = StyledProps &
  RefProp<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>
