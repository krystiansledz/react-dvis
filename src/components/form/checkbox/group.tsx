import {
  FormControl,
  FormLabel,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext, useWatch, get } from "react-hook-form";

import { Option } from "../../../utils/form";

import ErrorFormHelperText from "../helpertext/error";

type Props = {
  name: string;
  label?: string;
  options: Option[];
  disabled?: boolean;
};

const CheckboxGroupFormField: React.VFC<Props> = ({
  name,
  label,
  options,
  disabled,
}) => {
  const {
    formState: { errors, isSubmitting, dirtyFields },
    control,
    trigger,
  } = useFormContext();

  // watch checkbox group to trigger validation, if dirty
  const watcher = useWatch({ control, name });
  React.useEffect(() => {
    if (get(dirtyFields, name)) trigger(name);
  }, [watcher]);

  const error = get(errors, name);
  const hasError = !!error?.message;
  const isDisabled = disabled || isSubmitting;

  return (
    <FormControl component="div" error={hasError} disabled={isDisabled}>
      {label && (
        <FormLabel>
          {label}
          <ErrorFormHelperText name={name} />
        </FormLabel>
      )}

      <FormGroup style={{ flexDirection: "row" }}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            name={name}
            label={option.label}
            control={
              <Controller
                name={`${name}.${option.value}`}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    checked={field.value}
                    disabled={isDisabled}
                  />
                )}
              />
            }
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxGroupFormField;
