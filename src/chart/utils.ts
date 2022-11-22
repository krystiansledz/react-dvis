import { ChartStepsPartial } from './wizard/context';
import { Config, Data, DataObject } from './types';
import { dateFormatter } from '../utils/date';
import FileSaver from 'file-saver';
import { getDataFromPath } from '../utils/data';
import { Type } from '../const';

export const getChartStepsInitialValues = (data: Data, config: Config): ChartStepsPartial => ({
  chartType: '',
  values: data,
  types: config.types,
  names: config.names,
  format: config.format,
});

export const formatData = (data: ChartStepsPartial, save: (data: ChartStepsPartial) => void) => {
  const { values, types, format } = data;
  const { dateFormat } = format;

  const filteredValues = values.map((object: Record<string, any>) => {
    const newObject: DataObject = {};
    Object.entries(types as Record<string, Type>).forEach(([path, type]) => {
      const value: string = getDataFromPath(object, path);

      newObject[path] = value;

      if (type === Type.DATE && dateFormat) {
        newObject[path] = dateFormatter(new Date(+value * 1000).toISOString(), dateFormat);
      }
    });
    return newObject;
  });

  save({
    filteredValues,
  });
};

export const downloadChartAsPng = (data: ChartStepsPartial) => {
  data.getPng().then((png: any) => {
    // Verify that png is not undefined
    if (png) {
      // Download with FileSaver
      FileSaver.saveAs(png, 'myChart.png');
    }
  });
};
