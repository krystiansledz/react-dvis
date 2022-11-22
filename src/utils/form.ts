import { FieldValues, FormState } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';

export type Option = {
  value: string;
  label: string;
};

export const getOptionsFromRecord = (record: Record<string, string>): Option[] =>
  Object.entries(record).map(([key, value]) => ({
    value: key,
    label: value,
  }));

export const isFileList = (files?: FileList | null): files is FileList => !!files?.length;

export const NON_FIELD_ERRORS = 'non_field_errors';
export const DETAIL_ERROR = 'detail';

export interface OnSubmitErrors {
  [NON_FIELD_ERRORS]?: string;
  [DETAIL_ERROR]?: string;
  [prop: string]: unknown;
}

export const isFormContextStateDirty = (formState: FormState<FieldValues>) =>
  formState.isDirty && Object.keys(formState.dirtyFields).length > 0;

export const mergeSchemas = (...schemas: AnyObjectSchema[]) => {
  const [first, ...rest] = schemas;

  return rest.reduce((mergedSchemas, schema) => mergedSchemas.concat(schema), first);
};
