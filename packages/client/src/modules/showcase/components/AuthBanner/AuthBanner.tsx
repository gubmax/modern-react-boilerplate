import { FC } from 'react'

import { ButtonVariants } from 'client/src/common/components/inputs/buttons/BaseButton'
import { Button } from 'client/src/common/components/inputs/buttons/Button'
import { cn } from 'client/src/common/helpers/classNames'
import { useComponentVariant } from 'client/src/common/hooks/useComponentVariant'
import { StyledProps } from 'client/src/common/typings'
import { Diamond } from '../Diamond'
import * as s from './AuthBanner.css'

const AuthBanner: FC<StyledProps> = ({ className, style }) => {
  const DiamondDesktop = useComponentVariant(null, Diamond)

  return (
    <div className={cn(s.wrapper, className)} style={style}>
      <div className={s.group}>
        <div className={s.content}>
          <h1 className={s.title}>Discover the exciting world of&nbsp;crypto&nbsp;art!</h1>
          <h2 className={s.subtitle}>Start collect digital artwork now.</h2>
          <div className={s.buttonsGroup}>
            <Button className={s.button} variant={ButtonVariants.PRIMARY_WHITE}>
              Sign Up
            </Button>
            <Button className={s.button} variant={ButtonVariants.OUTLINE_WHITE}>
              Sign In
            </Button>
          </div>
        </div>
        {DiamondDesktop && <DiamondDesktop className={s.diamond} />}
      </div>
    </div>
  )
}

export default AuthBanner
