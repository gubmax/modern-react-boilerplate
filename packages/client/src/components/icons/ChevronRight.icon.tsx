import { VFC } from 'react'

import { IconProps, withIcon } from 'client/src/common/hocs/withIcon'

const ChevronRightIcon: VFC<IconProps> = (props) => {
  return (
    <svg {...props}>
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
    </svg>
  )
}

export default withIcon(ChevronRightIcon)
