import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { getOptionsFromRecord } from '../../../utils/form';
import { Formats } from '../../../utils/format';
import { Type } from '../../../const';

type Props = {
  name: string;
  label: string;
  type: Type;
  value: Type;
  onChange: (event: SelectChangeEvent) => void;
};

const SelectFormat: React.FC<Props> = ({ name, label, value, onChange, type }) => {
  const labelId = `${name}-label`;

  const options = getOptionsFromRecord(Formats[type]);

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select id={name} labelId={labelId} value={value} label={label} onChange={onChange}>
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFormat;
