import { FC } from 'react'

import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { H1 } from 'client/src/components/typography/Heading'
import { PAGE_TITLE } from './About.constants'

const AboutPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)
  return <H1>{PAGE_TITLE}</H1>
}

export default AboutPage
