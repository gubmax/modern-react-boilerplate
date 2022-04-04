import { FC } from 'react'

import { IconSizes } from 'client/src/common/hocs/withIcon'
import { EmptyShoppingCartIcon } from 'client/src/common/components/icons'
import * as s from './EmptyMessage.css'

const EmptyMessage: FC = () => {
  return (
    <div className={s.wrapper}>
      <EmptyShoppingCartIcon className={s.icon} size={IconSizes.HUGE} />
      <h2 className={s.text}>Your cart is empty</h2>
    </div>
  )
}

export default EmptyMessage
