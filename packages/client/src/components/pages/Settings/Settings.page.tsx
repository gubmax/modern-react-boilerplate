import { FC } from 'react'

import { H1 } from 'client/src/components/typography'
import { useDocumentTitle } from 'client/src/common/hooks'
import { PAGE_TITLE } from './Settings.constants'

const SettingsPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)
  return <H1>{PAGE_TITLE}</H1>
}

export default SettingsPage
