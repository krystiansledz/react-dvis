import { ChartGenerator } from 'react-dvis-test';
import React from 'react';
import data from './files/weather_data.json';
import config from './files/weather_config.json';

const Example2 = () => {
  return (
    <>
      <ChartGenerator data={data} config={config} basePath='/example2' />
    </>
  );
};

export default Example2;
