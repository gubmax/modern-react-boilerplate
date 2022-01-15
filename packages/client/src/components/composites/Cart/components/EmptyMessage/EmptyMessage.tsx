import { FC } from 'react'

import { IconSizes } from 'client/src/common/hocs/withIcon'
import { EmptyShoppingCartIcon } from 'client/src/components/icons'
import { Wrapper, WrapperVariants } from 'client/src/components/surfaces/Wrapper'
import { H2 } from 'client/src/components/typography/Heading'
import * as s from './EmptyMessage.css'

const EmptyMessage: FC = () => {
  return (
    <Wrapper className={s.wrapper} variant={WrapperVariants.OUTLINED}>
      <EmptyShoppingCartIcon className={s.icon} size={IconSizes.HUGE} />
      <H2 className={s.text}>Your cart is empty</H2>
    </Wrapper>
  )
}

export default EmptyMessage
