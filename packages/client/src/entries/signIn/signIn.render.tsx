import 'reflect-metadata'

import { SignInPage } from 'client/src/modules/pages/signIn'
import { RenderTemplate } from 'shared/typings/renderTemplate'
import 'client/src/common/styles/reset.css'
import 'client/src/common/styles/global.css'

export const renderTemplate: RenderTemplate = () => {
  return <SignInPage />
}
