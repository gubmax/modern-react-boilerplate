import { FC, memo } from 'react'

import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { SignUp } from 'client/src/modules/features/auth'
import { AuthPageLayout } from 'client/src/modules/features/auth'
import { PAGE_TITLE } from './SignUp.constants'

const SignUpPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)

  return (
    <AuthPageLayout>
      <SignUp />
    </AuthPageLayout>
  )
}

export default memo(SignUpPage)
