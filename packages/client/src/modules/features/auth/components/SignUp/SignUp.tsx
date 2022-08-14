import { ChangeEventHandler, FC, memo, useState } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { ButtonVariants } from 'client/src/common/components/inputs/buttons/BaseButton'
import { Button } from 'client/src/common/components/inputs/buttons/Button'
import { Field } from 'client/src/common/components/inputs/Field'
import { A } from 'client/src/common/components/typography/Anchor'
import { cn } from 'client/src/common/helpers/classNames'
import { noop } from 'client/src/common/helpers/noop'
import { useEvent } from 'client/src/common/hooks/useEvent'
import { useUnmount } from 'client/src/common/hooks/useUnmount'
import { Agreement } from '../Agreement'
import { TEXT_ACTION } from './SIgnUp.constants'
import { SignUpProps } from './SignUp.types'
import * as s from './SignUp.css'

const SignUp: FC<SignUpProps> = ({ className, style, navigateToSignInPage = noop }) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeLogin = useEvent<ChangeEventHandler<HTMLInputElement>>(({ target }) =>
    setLogin(target.value),
  )

  const handleChangePassword = useEvent<ChangeEventHandler<HTMLInputElement>>(({ target }) =>
    setPassword(target.value),
  )

  useUnmount(() => {
    setLogin('')
    setPassword('')
  })

  return (
    <div className={cn(s.wrapper, className)} style={style}>
      <h2 className={s.title}>Welcome</h2>
      <p className={s.subtitle}>Create your account</p>
      <Field
        className={s.field}
        name="login"
        label="Login"
        value={login}
        autoFocus
        autoComplete
        onChange={handleChangeLogin}
      />
      <Field
        className={s.field}
        name="password"
        label="Password"
        value={password}
        password
        autoComplete={false}
        onChange={handleChangePassword}
      />
      <Button variant={ButtonVariants.PRIMARY} large>
        {TEXT_ACTION}
      </Button>
      <div className={s.linkWrapper}>
        <span>
          Already have an account?{' '}
          <A href={PageRoutes.SIGN_IN} onClick={navigateToSignInPage}>
            Sign in
          </A>
        </span>
      </div>
      <Agreement className={s.agreement} actionText={TEXT_ACTION} />
    </div>
  )
}

export default memo(SignUp)
