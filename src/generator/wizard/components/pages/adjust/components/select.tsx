import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Type } from "../../../../../const";
import { getOptionsFromRecord } from "../../../../../../utils/form";

type Props = {
  name: string;
  label: string;
  value: Type;
  onChange: (event: SelectChangeEvent) => void;
};

const SelectType: React.VFC<Props> = ({ name, label, value, onChange }) => {
  const labelId = `${name}-label`;

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        id={name}
        labelId={labelId}
        value={value}
        label={label}
        onChange={onChange}
      >
        {TypeOptions.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectType;

const Types: Record<string, string> = {
  [Type.DATE]: "Date",
  [Type.NUMBER]: "Number",
  [Type.BOOLEAN]: "Boolean",
  [Type.STRING]: "String",
};

const TypeOptions = getOptionsFromRecord(Types);
