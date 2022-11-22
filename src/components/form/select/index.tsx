import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { Option } from '../../../utils/form';

type Props = {
  name: string;
  label: string;
  options: Option[];
  onChange: (value: string) => void;
};

const SelectField: React.FC<Props> = ({ name, label, options, onChange }) => {
  const labelId = `${name}-label`;
  const [value, setValue] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select id={name} labelId={labelId} value={value} label={label} onChange={handleChange}>
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default SelectField;
