import { FC } from 'react'

import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { NotFound } from 'client/src/modules/layout/notFound'
import { PAGE_TITLE } from './NotFound.constants'

const NotFoundPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)
  return <NotFound />
}

export default NotFoundPage
