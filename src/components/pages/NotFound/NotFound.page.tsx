import { FC } from 'react'

import { useDocumentTitle } from 'src/common/hooks'
import { NotFoundBlock } from 'src/components/composites'

const PAGE_TITLE = 'Page Not Found'

const NotFoundPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)
  return <NotFoundBlock />
}

export default NotFoundPage
