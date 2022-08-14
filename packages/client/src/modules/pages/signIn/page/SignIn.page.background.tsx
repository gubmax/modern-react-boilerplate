import { FC, memo } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { useLink } from 'client/src/common/hooks/useLink'
import { SignIn } from 'client/src/modules/features/auth'
import { PAGE_TITLE, USE_LINK_OPTIONS } from './SignIn.constants'

const SignInBackgroundPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)

  const navigateToSignUpPage = useLink(PageRoutes.SIGN_UP, USE_LINK_OPTIONS)
  const navigateToForgotPasswordPage = useLink(PageRoutes.FORGOT_PASSWORD, USE_LINK_OPTIONS)

  return (
    <SignIn
      navigateToSignUpPage={navigateToSignUpPage}
      navigateToForgotPasswordPage={navigateToForgotPasswordPage}
    />
  )
}

export default memo(SignInBackgroundPage)
