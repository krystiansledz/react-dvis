import { ChartGenerator } from 'react-dvis-test';
import React from 'react';
import fisData from './files/fis-data.json';
import redmineConfig from './files/config.json';
import { useLocation } from 'react-router-dom';

const Generator = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <ChartGenerator data={fisData.issues} config={redmineConfig} />
    </>
  );
};

export default Generator;
