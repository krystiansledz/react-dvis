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
      {location.pathname}
      <ChartGenerator data={fisData.issues} config={redmineConfig} basePath='/package' />
    </>
  );
};

export default Generator;
