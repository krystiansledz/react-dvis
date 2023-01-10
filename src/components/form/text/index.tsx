import { TextFieldProps } from "@mui/material";
import React from "react";
import { FieldError } from "react-hook-form";

import Controlled from "../controlled";

import FormTextField from "./field";

type Props = Omit<TextFieldProps, "name" | "error"> & {
  name: string;
  error?: FieldError; // override auto rhf error? rarely needed
};

const TextFormField: React.VFC<Props> = ({ name, error, ...props }) => (
  <Controlled
    name={name}
    render={({
      field,
      fieldState: { error: rhfError },
      formState: { isSubmitting },
    }) => (
      <FormTextField
        error={(error ?? rhfError)?.message}
        disabled={isSubmitting}
        field={field}
        {...props}
      />
    )}
  />
);

export default TextFormField;
