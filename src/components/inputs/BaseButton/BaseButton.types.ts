import { ButtonHTMLAttributes } from 'react'

import { StyledProps } from 'src/types'

export interface BaseButtonProps
  extends StyledProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  primary?: boolean
  onClick?: () => void
}
