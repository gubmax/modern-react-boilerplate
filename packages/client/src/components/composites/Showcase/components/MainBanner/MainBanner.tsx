import { VFC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { Wrapper } from 'client/src/components/surfaces/Wrapper'
import { Button } from 'client/src/components/inputs/buttons/Button'
import { H1, H2 } from 'client/src/components/typography/Heading'
import { StyledProps } from 'client/src/common/typings'
import * as s from './MainBanner.css'

const MainBanner: VFC<StyledProps> = ({ className, style }) => {
  return (
    <Wrapper className={cn(s.wrapper, className)} style={style}>
      <H1 className={s.title}>Discover the exciting world of&nbsp;crypto&nbsp;art!</H1>
      <H2 className={s.subtitle}>Start collect digital artwork now.</H2>
      <div className={s.buttonsGroup}>
        <Button className={s.button} primary white>
          Sign Up
        </Button>
        <Button className={s.button} white>
          Sign In
        </Button>
      </div>
    </Wrapper>
  )
}

export default MainBanner
