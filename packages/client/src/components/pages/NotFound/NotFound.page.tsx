import { FC } from 'react'

import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { NotFoundBlock } from 'client/src/components/composites/NotFoundBlock'
import { PAGE_TITLE } from './NotFound.constants'

const NotFoundPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)
  return <NotFoundBlock />
}

export default NotFoundPage
