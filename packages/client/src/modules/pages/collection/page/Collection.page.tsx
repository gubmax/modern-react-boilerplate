import { FC } from 'react'

import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { PageTitle } from 'client/src/common/components/elements/PageTitle'
import { PAGE_TITLE } from './Collection.constants'

const CollectionPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)
  return <PageTitle>{PAGE_TITLE}</PageTitle>
}

export default CollectionPage
