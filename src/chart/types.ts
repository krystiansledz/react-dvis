import { ChartSteps } from './wizard/schemas';

export enum ChartType {
  LINE = 'Line',
  BAR = 'Bar',
  AREA = 'Area',
  SCATTER = 'Scatter',
}

export const ChartTypes: Record<ChartType, string> = {
  [ChartType.LINE]: 'Line chart',
  [ChartType.BAR]: 'Bar chart',
  [ChartType.AREA]: 'Area chart',
  [ChartType.SCATTER]: 'Scatter chart',
};

export type DataObject = {
  [key: string]: string | DataObject;
};

export type Config = Pick<ChartSteps, 'types' | 'names' | 'format'>;

export type Data = Pick<ChartSteps, 'values'>;
