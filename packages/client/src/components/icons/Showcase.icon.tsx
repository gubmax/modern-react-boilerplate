import { VFC } from 'react'

import { IconProps, withIcon } from 'client/src/common/hocs/withIcon'

const ShowcaseIcon: VFC<IconProps> = (props) => {
  return (
    <svg {...props}>
      <path d="M3,3v8h8V3H3z M9,9H5V5h4V9z M3,13v8h8v-8H3z M9,19H5v-4h4V19z M13,3v8h8V3H13z M19,9h-4V5h4V9z M13,13v8h8v-8H13z M19,19h-4v-4h4V19z" />
    </svg>
  )
}

export default withIcon(ShowcaseIcon)
