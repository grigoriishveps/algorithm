import { TextField as MuiTextField } from '@mui/material'
import React, { ChangeEvent } from 'react'

const TextField = ({
 value,
 onChange,
 name,
 className = '',
 label = undefined,
 fullWidth = false,
 required = false,
 autoFocus = false,
 id,
 type,
 autoComplete,
 readOnly = false,
 multiline = false,
 onKeyPress = undefined,
}) => (
  <MuiTextField
    multiline={multiline}
    required={required}
    fullWidth={fullWidth}
    autoFocus={autoFocus}
    variant="outlined"
    margin="normal"
    id={id}
    className={className}
    name={name}
    label={label}
    type={type}
    autoComplete={autoComplete}
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    InputProps={{
      readOnly: readOnly,
    }}
  />
)

export default TextField