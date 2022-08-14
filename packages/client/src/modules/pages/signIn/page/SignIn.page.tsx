import { FC, memo } from 'react'

import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { SignIn } from 'client/src/modules/features/auth'
import { AuthPageLayout } from 'client/src/modules/features/auth'
import { PAGE_TITLE } from './SignIn.constants'

const SignInPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)

  return (
    <AuthPageLayout>
      <SignIn />
    </AuthPageLayout>
  )
}

export default memo(SignInPage)
