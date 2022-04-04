import { VFC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { Button } from 'client/src/common/components/inputs/buttons/Button'
import { StyledProps } from 'client/src/common/typings'
import * as s from './AuthBanner.css'

const AuthBanner: VFC<StyledProps> = ({ className, style }) => {
  return (
    <div className={cn(s.wrapper, className)} style={style}>
      <h1 className={s.title}>Discover the exciting world of&nbsp;crypto&nbsp;art!</h1>
      <h2 className={s.subtitle}>Start collect digital artwork now.</h2>
      <div className={s.buttonsGroup}>
        <Button className={s.button} primary white>
          Sign Up
        </Button>
        <Button className={s.button} white>
          Sign In
        </Button>
      </div>
    </div>
  )
}

export default AuthBanner
