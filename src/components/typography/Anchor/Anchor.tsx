import { FC } from 'react'

import { AnchorProps } from './Anchor.types'
import s from './Anchor.styles'

const Anchor: FC<AnchorProps> = ({ style, innerRef, ...rest }) => {
  return <a css={[s.link, style]} ref={innerRef} {...rest} />
}

export default Anchor
