import { FC } from 'react'

import { A } from 'client/src/components/typography'
import { LINK_REPO } from './LinkToRepo.constants'

const LinkToRepo: FC = () => {
  return (
    <A href={LINK_REPO} target="_blank" rel="noreferrer noopener">
      GitHub
    </A>
  )
}

export default LinkToRepo
