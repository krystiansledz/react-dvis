import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { FieldValues, ControllerRenderProps } from 'react-hook-form';

export type Field = ControllerRenderProps<FieldValues, string>;

type Props = Omit<TextFieldProps, 'error'> & {
  error?: string | boolean;
  disabled?: boolean;
  field?: Field;
};

const TextFormFieldField: React.FC<Props> = React.forwardRef(
  ({ error, disabled, field, inputProps, ...props }, ref) => (
    <TextField
      ref={ref}
      error={!!error}
      helperText={error}
      disabled={disabled}
      inputProps={{ ...inputProps }}
      {...field}
      {...props}
    />
  ),
);

export default TextFormFieldField;
