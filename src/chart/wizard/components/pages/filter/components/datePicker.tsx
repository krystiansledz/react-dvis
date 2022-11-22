import React, { useState } from 'react';
import { DatePickers } from '../../../../../../utils/format';
import { TextField, TextFieldProps } from '@mui/material';
import { MobileDatePicker, MobileDateTimePicker, MobileTimePicker } from '@mui/x-date-pickers';
import { DateTime } from 'luxon';

type Props = {
  format: DatePickers;
  fieldValue: string | null;
  onUpdateValue: (value: DateTime | null) => void;
  disabled?: boolean;
};

const DatePicker: React.FC<Props> = ({ format, fieldValue, onUpdateValue, disabled }) => {
  const [value, setValue] = useState<string | null>(fieldValue ? fieldValue : new Date().toString());

  const sharedDatePickerProps = {
    onChange: (value: DateTime | null) => {
      setValue(value ? value.toString() : null);
    },
    onAccept: onUpdateValue,
    value,
    renderInput: (params: TextFieldProps) => <TextField {...params} disabled={disabled} />,
    disabled,
    ampm: false,
  };

  return (
    <>
      {format === DatePickers.DATE && <MobileDatePicker<string, DateTime> {...sharedDatePickerProps} />}
      {format === DatePickers.TIME && <MobileTimePicker<string, DateTime> {...sharedDatePickerProps} />}
      {format === DatePickers.DATE_TIME && <MobileDateTimePicker<string, DateTime> {...sharedDatePickerProps} />}
    </>
  );
};

export default DatePicker;
