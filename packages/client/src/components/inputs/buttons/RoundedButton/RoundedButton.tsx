import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { BaseButton, BaseButtonProps } from '../BaseButton'
import * as s from './RoundedButton.css'

const RoundedButton: FC<BaseButtonProps> = ({ className, ...rest }) => (
  <BaseButton className={cn(s.rounded, className)} {...rest} />
)

export default RoundedButton
