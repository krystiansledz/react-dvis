import { DataObject } from 'react-dvis-test/dist/cjs/chart/types';

export const getDataFromPath = (object: Record<string, any>, path: string) => {
  return path
    .split('.')
    .reduce((previousValue, currentValue) => previousValue[currentValue], object) as unknown as string;
};

export const setValue = (obj: DataObject, path: string, value: string) => {
  let schema: DataObject = obj; // a moving reference to internal objects within obj
  const pathList = path.split('.');
  pathList.slice(0, -1).forEach((value) => {
    schema = schema[value] as DataObject;
  });

  schema[pathList[pathList.length - 1]] = value;
};
