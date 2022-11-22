import { TextFieldProps } from '@mui/material';
import { OutlinedTextFieldProps } from '@mui/material/TextField/TextField';
import React, { Ref } from 'react';

import Controlled from '../controlled';

import Input from './input';

export type Props = Omit<TextFieldProps, 'name' | 'error'> &
  Pick<OutlinedTextFieldProps, 'size' | 'label' | 'placeholder'> & {
    name: string;
    inputRef: Ref<HTMLInputElement | null>;
  };

const FileField: React.FC<Props> = ({ name, inputRef, ...props }) => {
  return (
    <Controlled
      name={name}
      render={({ field, fieldState: { error }, formState: { isSubmitting } }) => (
        <Input field={field} error={error?.message} disabled={isSubmitting} inputRef={inputRef} {...props} />
      )}
    />
  );
};

export default FileField;
