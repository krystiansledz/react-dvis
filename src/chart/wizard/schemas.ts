import * as y from 'yup';
import { mergeSchemas } from '../../utils/form';
import { DataObject } from '../types';
import { Type } from '../../const';

export const SelectStepSchema = y.object();

export const ChartStepsSchema = mergeSchemas(SelectStepSchema);

export type ChartSteps = y.Asserts<typeof ChartStepsSchema> & {
  values: DataObject[];
  filteredValues: DataObject[];
  types: Record<string, Type>;
  names: Record<string, string>;
  format: Record<string, string>;
};

export type ChartStepsKeys = 'names' | 'format';
