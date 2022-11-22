import { FormControlLabel, FormControlLabelProps, Radio } from '@mui/material';
import React from 'react';

export type RadioFormFieldProps = Omit<FormControlLabelProps, 'value' | 'control'> & {
  value: string;
};

const RadioFormField: React.FC<RadioFormFieldProps> = ({ value, label, ...props }) => (
  <FormControlLabel {...props} value={value} label={label} control={<Radio />} />
);

export default RadioFormField;
