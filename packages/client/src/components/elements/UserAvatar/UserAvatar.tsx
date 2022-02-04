import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { useToggle } from 'client/src/common/hooks/useToggle'
import { Modal } from 'client/src/components/auxiliary/Modal'
import { UserIcon } from 'client/src/components/icons'
import { StyledProps } from 'client/src/common/typings'
import * as s from './UserAvatar.css'

const UserAvatar: FC<StyledProps> = ({ className, style }) => {
  const [shown, toggleShown] = useToggle()

  return (
    <>
      <div className={cn(s.wrapper, className)} style={style} role="button" onClick={toggleShown}>
        <UserIcon active />
      </div>
      <Modal active={shown} onClose={toggleShown}>
        The quick brown fox jumps over the lazy dog.
      </Modal>
    </>
  )
}

export default UserAvatar
