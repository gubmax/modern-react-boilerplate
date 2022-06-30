import { FC, memo } from 'react'

import { DeleteIcon } from 'client/src/common/components/icons'
import { ButtonVariants } from 'client/src/common/components/inputs/buttons/BaseButton'
import { Button } from 'client/src/common/components/inputs/buttons/Button'
import { RoundedButton } from 'client/src/common/components/inputs/buttons/RoundedButton'
import { IconVariants } from 'client/src/common/hocs/withIcon'
import { useMediaQuery } from 'client/src/common/hooks/useMediaQuery'
import { dt } from 'client/src/common/styles/designTokens'
import { TEXT } from './DeleteButton.constants'
import { DeleteButtonProps } from './DeleteButton.types'

const DeleteButton: FC<DeleteButtonProps> = ({ className, style, onClick }) => {
  const isMobile = useMediaQuery(dt.media.minWidth.mobile)
  const ButtonVariant = isMobile ? Button : RoundedButton

  return (
    <ButtonVariant
      className={className}
      style={style}
      variant={ButtonVariants.OUTLINE}
      onClick={onClick}
    >
      <DeleteIcon variant={IconVariants.ACCENT} />
      {isMobile ? TEXT : null}
    </ButtonVariant>
  )
}

export default memo(DeleteButton)
