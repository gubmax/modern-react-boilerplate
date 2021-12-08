import { FC } from 'react'

import { useDocumentTitle } from 'client/src/common/hooks'
import { H1 } from 'client/src/components/typography'
import { PAGE_TITLE } from './About.constants'

const AboutPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)
  return <H1>{PAGE_TITLE}</H1>
}

export default AboutPage
