import { FormControl } from '@mui/material';
import React from 'react';
import { get, useFormContext } from 'react-hook-form';

import InlineFormHelperText from './inline';

type Props = {
  name: string;
};

/**
 * Use with unconventional form fields without built-in validation error display.
 * e.g., checkbox data grid
 **/
const ErrorFormHelperText: React.FC<Props> = ({ name }) => {
  const {
    formState: { errors },
  } = useFormContext();

  const error = get(errors, name);
  const hasError = !!error?.message;

  if (!hasError) return null;

  return (
    <FormControl component='div' error={hasError}>
      <InlineFormHelperText>{error?.message}</InlineFormHelperText>
    </FormControl>
  );
};

export default ErrorFormHelperText;
