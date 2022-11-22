import { TextField, Input, InputAdornment } from '@mui/material';
import React, { Ref } from 'react';
import { ControllerRenderProps, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { Props as FileFieldProps } from './index';
import { CloseIconButton } from '../../ui/icons';

export type Props = Omit<FileFieldProps, 'name'> & {
  error?: string;
  field: Omit<ControllerRenderProps, 'value'> & { value: File | undefined };
};

const FileFieldInput: React.FC<Props> = ({ label, error, field, inputRef, ...props }) => {
  const { resetField } = useFormContext();

  const handleRemoveFile = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    resetField(field.name);
  };

  return (
    <>
      <ReadOnlyTextField
        label={label}
        value={field.value?.name ?? ''}
        onClick={() => triggerFileInputClickByRef(inputRef)}
        InputProps={{
          readOnly: true,
          endAdornment: field.value ? (
            <InputAdornment position='end'>
              <CloseIconButton onClick={handleRemoveFile} edge='end' />
            </InputAdornment>
          ) : undefined,
        }}
        InputLabelProps={{
          shrink: !!props.placeholder,
        }}
        error={!!error}
        helperText={error}
        {...props}
      />

      <Input
        inputRef={inputRef}
        style={{ display: 'none' }}
        type='file'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (file) field.onChange(file);
          e.target.value = '';
        }}
      />
    </>
  );
};

export default FileFieldInput;

const ReadOnlyTextField = styled(TextField)`
  width: 100%;

  .MuiInputBase-root {
    > input {
      cursor: pointer;
      &::placeholder {
        opacity: 0.6; // match mui input labels
      }
    }

    // match mui input labels
    &.Mui-error {
      > input::placeholder {
        color: ${(props) => props.theme.palette.error.main};
        opacity: 1;
      }
    }
  }
`;

export const triggerFileInputClickByRef = (ref: Ref<HTMLInputElement>) => {
  if (ref && 'current' in ref && ref.current) ref.current.click();
};
