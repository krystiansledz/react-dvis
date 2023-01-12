import _ from 'lodash';
import * as y from 'yup';
import { mergeSchemas } from '../../utils/form';
import { DataType } from '../const';
import { DataObject } from 'react-dvis/dist/cjs/chart/types';

export const LoadStepSchema = y.object({
  data: y
    .array()
    .nullable()
    .test('nullable-check', 'Load JSON.', (data) => data !== null)
    .test('empty-check', 'Load valid JSON.', (data) => !_.isEmpty(data)),
});

export const GeneratorStepsSchema = mergeSchemas(LoadStepSchema);

export type GeneratorSteps = y.Asserts<typeof GeneratorStepsSchema> & {
  types: Record<string, DataType>;
  names: Record<string, string>;
  format: Record<string, string>;
  formattedData: DataObject[];
};

export type GeneratorStepsKeys = 'types' | 'names' | 'format';
