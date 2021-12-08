import { FC } from 'react'

import { useDocumentTitle } from 'client/src/common/hooks'
import { NotFoundBlock } from 'client/src/components/composites'
import { PAGE_TITLE } from './NotFound.constants'

const NotFoundPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)
  return <NotFoundBlock />
}

export default NotFoundPage
