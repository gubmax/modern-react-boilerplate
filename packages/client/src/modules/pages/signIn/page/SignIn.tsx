import { FC } from 'react'

import { PageTitle } from 'client/src/common/components/elements/PageTitle'
import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { SignIn } from 'client/src/modules/auth'
import { PAGE_TITLE } from './SignIn.constants'

const SignInPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)
  return (
    <>
      <PageTitle>{PAGE_TITLE}</PageTitle>
      <SignIn />
    </>
  )
}

export default SignInPage
