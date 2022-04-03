import { FC } from 'react'

import { IconSizes } from 'client/src/common/hocs/withIcon'
import { EmptyShoppingCartIcon } from 'client/src/common/components/icons'
import { OutlineWrapper } from 'client/src/common/components/surfaces/Wrapper'
import { H2 } from 'client/src/common/components/typography/Heading'
import * as s from './EmptyMessage.css'

const EmptyMessage: FC = () => {
  return (
    <OutlineWrapper className={s.wrapper}>
      <EmptyShoppingCartIcon className={s.icon} size={IconSizes.HUGE} />
      <H2 className={s.text}>Your cart is empty</H2>
    </OutlineWrapper>
  )
}

export default EmptyMessage
