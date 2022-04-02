import { ChangeEventHandler, FC, memo, useCallback, useState } from 'react'

import { StyledProps } from 'client/src/common/typings'
import { Field } from 'client/src/components/elements/Field'

const SearchField: FC<StyledProps> = ({ className, style }) => {
  const [searchText, setSearchText] = useState('')

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => setSearchText(target.value),
    [],
  )

  return (
    <Field
      className={className}
      name="search"
      placeholder="Search..."
      style={style}
      value={searchText}
      onChange={handleChange}
    />
  )
}

export default memo(SearchField)
