import { FC } from 'react'

import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { H1 } from 'client/src/components/typography/Heading'
import { PAGE_TITLE } from './Schedule.constants'

const SchedulePage: FC = () => {
  useDocumentTitle(PAGE_TITLE)
  return <H1>{PAGE_TITLE}</H1>
}

export default SchedulePage
