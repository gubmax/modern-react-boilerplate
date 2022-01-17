import { FC, useCallback, useState } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { Modal } from 'client/src/components/auxiliary/Modal'
import { UserIcon } from 'client/src/components/icons'
import { StyledProps } from 'client/src/common/typings'
import * as s from './UserAvatar.css'

const UserAvatar: FC<StyledProps> = ({ className, style }) => {
  const [shown, setShown] = useState(false)

  const handleClose = useCallback(() => setShown(false), [])

  return (
    <>
      <div
        className={cn(s.wrapper, className)}
        style={style}
        role="button"
        onClick={() => setShown(true)}
      >
        <UserIcon active />
      </div>
      <Modal active={shown} onClose={handleClose}>
        The quick brown fox jumps over the lazy dog.
      </Modal>
    </>
  )
}

export default UserAvatar
