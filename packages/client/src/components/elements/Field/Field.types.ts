import { ChangeEventHandler, KeyboardEventHandler } from 'react'

import { RefProp, StyledProps } from 'client/src/common/typings'

export interface FieldProps extends StyledProps, RefProp<HTMLInputElement> {
  autoComplete?: boolean
  autoFocus?: boolean
  label?: string
  name: string
  password?: boolean
  placeholder?: string
  value?: string | number | string[]
  onChange?: ChangeEventHandler<HTMLInputElement>
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>
}
