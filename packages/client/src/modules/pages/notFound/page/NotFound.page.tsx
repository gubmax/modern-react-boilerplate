import { FC, memo } from 'react'

import { useDocumentTitle } from 'client/src/common/hooks/useDocumentTitle'
import { NotFound } from 'client/src/modules/layout/notFound'
import { PAGE_TITLE } from './NotFound.constants'
import * as s from './NotFound.css'

const NotFoundPage: FC = () => {
  useDocumentTitle(PAGE_TITLE)

  return <NotFound className={s.wrapper} />
}

export default memo(NotFoundPage)
