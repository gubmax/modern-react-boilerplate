import { FC } from 'react'

import { BaseButton, BaseButtonProps } from '../BaseButton'
import * as s from './RoundedButton.css'

const RoundedButton: FC<BaseButtonProps> = (props) => (
  <BaseButton className={s.rounded} {...props} />
)

export default RoundedButton
