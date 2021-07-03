import { AnchorHTMLAttributes } from 'react'

import { StyledProps } from 'src/types'

export type AnchorProps = StyledProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'style'>
