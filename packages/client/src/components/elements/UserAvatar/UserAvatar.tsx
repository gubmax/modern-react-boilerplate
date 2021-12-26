import { FC } from 'react'

import { cn } from 'client/src/common/helpers'
import { Link } from 'client/src/components/auxiliary'
import { UserIcon } from 'client/src/components/icons'
import { PageRoutes } from 'client/src/infra/http'
import { StyledProps } from 'client/src/common/typings'
import * as s from './UserAvatar.css'

const UserAvatar: FC<StyledProps> = ({ className, style }) => {
  return (
    <Link to={PageRoutes.ROOT} className={cn(s.wrapper, className)} style={style}>
      <UserIcon active />
    </Link>
  )
}

export default UserAvatar
