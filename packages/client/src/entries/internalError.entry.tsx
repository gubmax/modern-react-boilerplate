import { InternalError } from 'client/src/modules/layout/internalError'

import 'client/src/common/styles/reset.css'
import 'client/src/common/styles/global.css'

export function renderInternalErrorTemplate(): JSX.Element {
  return <InternalError />
}
