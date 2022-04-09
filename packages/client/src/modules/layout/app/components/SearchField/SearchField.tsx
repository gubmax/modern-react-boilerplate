import { ChangeEventHandler, FC, memo, useCallback, useState } from 'react'

import { CloseIcon, SearchIcon } from 'client/src/common/components/icons'
import { RoundedButton } from 'client/src/common/components/inputs/buttons/RoundedButton'
import { Field } from 'client/src/common/components/inputs/Field'
import { cn } from 'client/src/common/helpers/classNames'
import { IconVariants } from 'client/src/common/hocs/withIcon'
import { StyledProps } from 'client/src/common/typings'
import * as s from './SearchField.css'

const SearchField: FC<StyledProps> = ({ className, style }) => {
  const [searchText, setSearchText] = useState('')

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => setSearchText(target.value),
    [],
  )

  const handleClickOnReset = useCallback(() => setSearchText(''), [])

  return (
    <div className={cn(s.wrapper, className)}>
      <RoundedButton className={s.searchIcon}>
        <SearchIcon variant={IconVariants.SECONDARY} />
      </RoundedButton>
      <Field
        className={s.field}
        name="search"
        placeholder="Search..."
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
