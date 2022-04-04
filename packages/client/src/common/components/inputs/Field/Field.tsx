import { memo, VFC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { surfaces } from 'client/src/common/styles/shared/surfaces.css'
import { FieldProps } from './Field.types'
import * as s from './Field.css'

const Field: VFC<FieldProps> = ({
  autoComplete,
  autoFocus = false,
  className,
  innerRef,
  label,
  name,
  password,
  placeholder,
  style,
  value = '',
  onChange,
  onKeyPress,
}) => {
  const template = (
    <input
      className={cn(surfaces.flat, s.input, label && s.withLabel, className)}
      name={name}
      placeholder={placeholder}
      readOnly={!onChange}
      ref={innerRef}
      style={style}
      tabIndex={!onChange ? -1 : undefined}
      type={password ? 'password' : 'text'}
      value={value}
      autoComplete={autoComplete ? 'on' : 'off'}
      autoFocus={autoFocus}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  )

  if (label) {
    return (
      <div className={s.wrapper}>
        <span className={s.label}>{label}</span>
        {template}
      </div>
    )
  }

  return template
}

export default memo(Field)
