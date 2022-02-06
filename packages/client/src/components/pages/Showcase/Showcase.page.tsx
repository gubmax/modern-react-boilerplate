import { FC } from 'react'

import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { Showcase } from 'client/src/components/composites/Showcase'

const ShowcasePage: FC = () => {
  useDocumentTitle()
  return <Showcase />
}

export default ShowcasePage
