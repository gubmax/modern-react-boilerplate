import { FC } from 'react'

import * as s from './PageTitle.css'

const PageTitle: FC<{ children: string }> = ({ children }) => {
  return <h1 className={s.title}>{children}</h1>
}

export default PageTitle
