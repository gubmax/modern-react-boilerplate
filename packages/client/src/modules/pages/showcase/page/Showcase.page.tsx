import { FC } from 'react'

import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { Showcase } from 'client/src/modules/features/showcase'

const ShowcasePage: FC = () => {
  useDocumentTitle()
  return <Showcase />
}

export default ShowcasePage
