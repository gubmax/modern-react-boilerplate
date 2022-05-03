import { ChangeEventHandler, FC, useCallback, useState } from 'react'

import { ButtonVariants } from 'client/src/common/components/inputs/buttons/BaseButton'
import { Button } from 'client/src/common/components/inputs/buttons/Button'
import { Field } from 'client/src/common/components/inputs/Field'
import { cn } from 'client/src/common/helpers/classNames'
import { useUnmount } from 'client/src/common/hooks/useUnmount'
import { StyledProps } from 'client/src/common/typings'
import * as s from './SignIn.css'

const SignIn: FC<StyledProps> = ({ className, style }) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeLogin = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => setLogin(target.value),
    [],
  )

  const handleChangePassword = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => setPassword(target.value),
    [],
  )

  useUnmount(() => {
    setLogin('')
    setPassword('')
  })

  return (
    <div className={cn(s.wrapper, className)} style={style}>
      <h2 className={s.title}>Sign in</h2>
      <p className={s.subtitle}>Enter your credentials to access your account.</p>
      <Field
        className={s.field}
        name="login"
        label="Login"
        value={login}
        onChange={handleChangeLogin}
      />
      <Field
        className={s.field}
        name="password"
        label="Password"
        value={password}
        password
        onChange={handleChangePassword}
      />
      <Button variant={ButtonVariants.PRIMARY} large>
        Continue
      </Button>
    </div>
  )
}

export default SignIn
