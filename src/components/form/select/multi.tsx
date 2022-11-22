import React, { useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import { Option } from '../../../utils/form';

type Props = {
  name: string;
  label: string;
  options: Option[];
  onChange: (value: string[]) => void;
};

const MultiSelect: React.FC<Props> = ({ name, label, options, onChange }) => {
  const labelId = `${name}-label`;
  const [selectValue, setSelectValue] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectValue>) => {
    const value = event.target.value;
    setSelectValue(typeof value === 'string' ? value.split(',') : value);
  };

  useEffect(() => {
    onChange(selectValue);
  }, [selectValue]);

  return (
    <FormControl>
      <InputLabel id={labelId}>Fields</InputLabel>
      <Select
        labelId={labelId}
        id={name}
        multiple
        value={selectValue}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
      >
        {options.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultiSelect;
