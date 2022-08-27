import { ChangeEventHandler, FC, memo, useState } from 'react'

import { CloseIcon, SearchIcon } from 'client/src/common/components/icons'
import { RoundedButton } from 'client/src/common/components/inputs/buttons/RoundedButton'
import { Field } from 'client/src/common/components/inputs/Field'
import { cn } from 'client/src/common/helpers/classNames'
import { IconVariants } from 'client/src/common/hocs/withIcon'
import { useEvent } from 'client/src/common/hooks/useEvent'
import { StyledProps } from 'client/src/common/typings'
import { FIELD_NAME, FIELD_PLACEHOLDER } from './SearchField.constants'
import * as s from './SearchField.css'

const SearchField: FC<StyledProps> = ({ className, style }) => {
  const [searchText, setSearchText] = useState('')

  const handleChange = useEvent<ChangeEventHandler<HTMLInputElement>>(({ target }) =>
    setSearchText(target.value),
  )

  const handleClickOnReset = useEvent(() => setSearchText(''))

  return (
    <div className={cn(s.wrapper, className)}>
      <SearchIcon className={s.searchIcon} variant={IconVariants.SECONDARY} />
      <Field
        className={s.field}
        name={FIELD_NAME}
        placeholder={FIELD_PLACEHOLDER}
        style={style}
        value={searchText}
        onChange={handleChange}
      />
      {searchText && (
        <RoundedButton className={s.resetIcon} onClick={handleClickOnReset}>
          <CloseIcon />
        </RoundedButton>
      )}
    </div>
  )
}

export default memo(SearchField)
