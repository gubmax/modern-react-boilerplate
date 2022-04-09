import { FC } from 'react'

import { EmptyShoppingCartIcon } from 'client/src/common/components/icons'
import { IconSizes } from 'client/src/common/hocs/withIcon'
import { typography } from 'client/src/common/styles/shared/typography.css'
import * as s from './EmptyMessage.css'

const EmptyMessage: FC = () => {
  return (
    <div className={s.wrapper}>
      <EmptyShoppingCartIcon className={s.icon} size={IconSizes.HUGE} />
      <h2 className={typography.h2}>Your cart is empty</h2>
    </div>
  )
}

export default EmptyMessage
