import { FC } from 'react'

import { cn } from 'src/common/helpers'
import { Link } from 'src/components/auxiliary'
import { UserIcon } from 'src/components/icons'
import { PageRoutes } from 'src/infra/http'
import { StyledProps } from 'src/types'
import * as s from './UserAvatar.css'

const UserAvatar: FC<StyledProps> = ({ className, style }) => {
  return (
    <Link to={PageRoutes.ROOT} className={cn(s.wrapper, className)} style={style}>
      <UserIcon active />
    </Link>
  )
}

export default UserAvatar
