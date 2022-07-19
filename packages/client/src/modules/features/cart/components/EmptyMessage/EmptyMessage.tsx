import { FC, memo } from 'react'

import { EmptyShoppingCartIcon } from 'client/src/common/components/icons'
import { IconSizes, IconVariants } from 'client/src/common/hocs/withIcon'
import { dt } from 'client/src/common/styles/designTokens'
import * as s from './EmptyMessage.css'

const EmptyMessage: FC = () => {
  return (
    <div className={s.wrapper}>
      <EmptyShoppingCartIcon
        className={s.icon}
        size={IconSizes.HUGE}
        variant={IconVariants.SECONDARY}
      />
      <h2 className={dt.style.typography.h2}>Your cart is empty</h2>
    </div>
  )
}

export default memo(EmptyMessage)
