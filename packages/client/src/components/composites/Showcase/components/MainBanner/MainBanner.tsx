import { VFC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { H1 } from 'client/src/components/typography/Heading'
import { Wrapper } from 'client/src/components/surfaces/Wrapper'
import { StyledProps } from 'client/src/common/typings'
import * as s from './MainBanner.css'

const MainBanner: VFC<StyledProps> = ({ className, style }) => {
  return (
    <Wrapper className={cn(s.wrapper, className)} style={style}>
      <H1 className={s.title}>
        Discover the largest NFT marketplace!
        <br />
        Join to us
      </H1>
    </Wrapper>
  )
}

export default MainBanner
