import { FC } from 'react'

import { cn } from 'src/helpers'
import { BaseButton, BaseButtonProps } from '../BaseButton'
import * as s from './RoundedButton.css'

const RoundedButton: FC<BaseButtonProps> = ({ className, ...rest }) => (
  <BaseButton className={cn(s.rounded, className)} {...rest} />
)

export default RoundedButton
