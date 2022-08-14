import { FC, memo } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { ButtonVariants } from 'client/src/common/components/inputs/buttons/BaseButton'
import { Button } from 'client/src/common/components/inputs/buttons/Button'
import { cn } from 'client/src/common/helpers/classNames'
import { useComponentVariant } from 'client/src/common/hooks/useComponentVariant'
import { useLink } from 'client/src/common/hooks/useLink'
import { StyledProps } from 'client/src/common/typings'
import { Diamond } from '../Diamond'
import * as s from './AuthBanner.css'

const LINK_OPTIONS = { background: true }

const AuthBanner: FC<StyledProps> = ({ className, style }) => {
  const DiamondDesktop = useComponentVariant(null, Diamond)
  const navigateToSignInPage = useLink(PageRoutes.SIGN_IN, LINK_OPTIONS)
  const navigateToSignUpPage = useLink(PageRoutes.SIGN_UP, LINK_OPTIONS)

  return (
    <div className={cn(s.wrapper, className)} style={style}>
      <div className={s.group}>
        <div className={s.content}>
          <h1 className={s.title}>Discover the exciting world of&nbsp;crypto&nbsp;art!</h1>
          <h2 className={s.subtitle}>Start collect digital artwork now.</h2>
          <div className={s.buttonsGroup}>
            <Button
              className={s.button}
              variant={ButtonVariants.PRIMARY_WHITE}
              onClick={navigateToSignUpPage}
              onKeyPress={navigateToSignUpPage}
            >
              Sign Up
            </Button>
            <Button
              className={s.button}
              variant={ButtonVariants.OUTLINE_WHITE}
              onClick={navigateToSignInPage}
              onKeyPress={navigateToSignInPage}
            >
              Sign In
            </Button>
          </div>
        </div>
        {DiamondDesktop && <DiamondDesktop className={s.diamond} />}
      </div>
    </div>
  )
}

export default memo(AuthBanner)
