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

export const mergeSchemas = (...schemas: AnyObjectSchema[]) => {
  const [first, ...rest] = schemas;

  return rest.reduce((mergedSchemas, schema) => mergedSchemas.concat(schema), first);
};
