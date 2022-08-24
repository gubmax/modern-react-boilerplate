import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { BaseButton, BaseButtonProps } from '../BaseButton'
import * as s from './RoundedButton.css'

const RoundedButton: FC<BaseButtonProps> = ({ className, children, ...rest }) => (
  <BaseButton className={cn(s.rounded, className)} innerClassName={s.inner} {...rest}>
    {children}
  </BaseButton>
)

export default RoundedButton
