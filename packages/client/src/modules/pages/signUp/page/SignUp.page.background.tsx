import { FC, memo } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { useLink } from 'client/src/common/hooks/useLink'
import { SignUp } from 'client/src/modules/features/auth'
import { PAGE_TITLE, USE_LINK_OPTIONS } from './SignUp.constants'

const SignUpBackgroundPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)

  const navigateToSignInPage = useLink(PageRoutes.SIGN_IN, USE_LINK_OPTIONS)

  return <SignUp navigateToSignInPage={navigateToSignInPage} />
}

export default memo(SignUpBackgroundPage)
