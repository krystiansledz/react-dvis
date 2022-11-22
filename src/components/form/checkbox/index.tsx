import { FormControl, Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';

import Controlled from '../controlled';

type Props = {
  name: string;
  label?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const CheckboxFormField: React.FC<Props> = ({ name, label, disabled, onClick }) => (
  <Controlled
    name={name}
    render={({ field, fieldState: { error }, formState: { isSubmitting } }) => (
      <FormControl component='div' error={!!error?.message}>
        <FormControlLabel
          name={name}
          label={label || ''}
          disabled={disabled || isSubmitting}
          control={<Checkbox {...field} checked={field.value} onClick={onClick} />}
        />
      </FormControl>
    )}
  />
);

export default CheckboxFormField;
