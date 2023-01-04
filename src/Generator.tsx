import { ChartGenerator } from 'react-dvis-test';
import React from 'react';
import fisData from './files/fis-data.json';
import redmineConfig from './files/config.json';

const Generator = () => {
  return (
    <>
      <ChartGenerator data={fisData.issues} config={redmineConfig} />
    </>
  );
};

export default Generator;
