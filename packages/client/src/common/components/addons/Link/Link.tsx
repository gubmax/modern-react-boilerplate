import { FC } from 'react'

import { useLink } from 'client/src/common/hooks/useLink'
import { LinkProps } from './Link.types'

const Link: FC<LinkProps> = ({ to, background, ...rest }) => {
  const navigate = useLink(to, {
    state: {
      backgroundLocation: typeof window !== 'undefined' && background ? location.pathname : '',
    },
  })

  return <a href={to} onClick={navigate} {...rest} />
}

export default Link
