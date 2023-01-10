import { LoadStepSchema } from './wizard/schemas';
import { GeneratorStepsPartial } from './wizard/context';
import _ from 'lodash';
import { Type } from './const';
import { DefaultOptions } from '../utils/format';

export const getGeneratorStepsInitialValues = (): GeneratorStepsPartial => ({
  data: null,
  formattedData: null,
});

export const validationStepLoad = async (data: GeneratorStepsPartial) => {
  return LoadStepSchema.validate(data)
    .then(() => {
      return undefined;
    })
    .catch(({ message }) => {
      return {
        message,
      };
    });
};

// prepare types

export const getDataType = (data: any): Type | undefined => {
  if (_.isString(data) && Date.parse(data)) {
    return Type.DATE;
  }
  if (_.isNumber(data)) {
    return Type.NUMBER;
  }
  if (_.isString(data)) {
    return Type.STRING;
  }
  if (_.isBoolean(data)) {
    return Type.BOOLEAN;
  }
  if (_.isObject(data) && !_.isArray(data)) {
    return Type.OBJECT;
  }
  return undefined;
};

const getTypes = (object: Record<string, unknown>, path: string[] = []): Record<string, Type> => {
  let objectTypes = {};
  Object.entries(object).forEach(([key, value]) => {
    const valueType = getDataType(value);
    if (valueType === undefined) {
      return {};
    }
    if (getDataType(value) === Type.OBJECT) {
      objectTypes = {
        ...objectTypes,
        ...getTypes(value as Record<string, unknown>, [...path, key]),
      };
    } else {
      objectTypes = {
        ...objectTypes,
        [[...path, key].join('.')]: valueType,
      };
    }
  });
  return objectTypes;
};

export const prepareStepAdjust = (state: GeneratorStepsPartial, save: (data: GeneratorStepsPartial) => void) => {
  if (!state.data) return null;

  const types = getTypes(state.data[0]);

  const dataKeys = Object.keys(types);

  save({
    types,
    names: Object.fromEntries(dataKeys.map((key) => [key, key])),
    format: Object.fromEntries(dataKeys.map((key) => [key, DefaultOptions[types[key]]])),
    formattedData: state.data,
  });
};

export const saveConfigFile = (state: GeneratorStepsPartial) => {
  const element = document.createElement('a');

  const textFile = new Blob(
    [
      JSON.stringify({
        types: state.types,
        names: state.names,
        format: state.format,
      }),
    ],
    {
      type: 'text/plain',
    },
  ); //pass data from localStorage API to blob
  element.href = URL.createObjectURL(textFile);
  element.download = 'configFile.json';
  document.body.appendChild(element);
  element.click();
};
