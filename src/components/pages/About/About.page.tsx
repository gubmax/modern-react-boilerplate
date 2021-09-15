import { FC } from 'react'

import { useDocumentTitle } from 'src/common/hooks'
import { H1 } from 'src/components/typography'

const PAGE_TITLE = 'About'

const AboutPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)
  return <H1>{PAGE_TITLE}</H1>
}

export default AboutPage
