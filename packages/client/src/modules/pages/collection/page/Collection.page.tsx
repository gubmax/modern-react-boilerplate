import { FC, memo } from 'react'

import { PageTitle } from 'client/src/common/components/elements/PageTitle'
import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { PAGE_TITLE } from './Collection.constants'

const CollectionPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)

  return <PageTitle>{PAGE_TITLE}</PageTitle>
}

export default memo(CollectionPage)
