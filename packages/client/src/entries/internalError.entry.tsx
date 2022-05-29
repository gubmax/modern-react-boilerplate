import { InternalError } from 'client/src/modules/layout/internalError'
import { RenderTemplate } from 'shared/typings/renderTemplate'
import 'client/src/common/styles/reset.css'
import 'client/src/common/styles/global.css'

export const renderTemplate: RenderTemplate = () => {
  return <InternalError />
}
