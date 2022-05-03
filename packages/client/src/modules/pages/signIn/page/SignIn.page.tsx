import { FC } from 'react'

import { Logo } from 'client/src/common/components/elements/Logo'
import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { SignIn } from 'client/src/modules/auth'
import { PAGE_TITLE } from './SignIn.constants'
import * as s from './SignIn.css'

const SignInPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)
  return (
    <div className={s.wrapper}>
      <Logo className={s.logo} />
      <SignIn className={s.form} />
    </div>
  )
}

export default SignInPage
