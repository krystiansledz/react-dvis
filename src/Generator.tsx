import { ChartGenerator } from 'react-dvis-test';
import React, { useEffect, useState } from 'react';
import { Data } from 'react-dvis-test/dist/cjs/chart/types';
import fisData from './files/fis-data.json';
import redmineConfig from './files/config.json';

const Generator = () => {
  const [redmineData, setRedmineData] = useState<Data>([]);

  useEffect(() => {
    setRedmineData(fisData.issues);
  }, []);

  return (
    <>
      <ChartGenerator data={redmineData} config={redmineConfig} />
    </>
  );
};

export default Generator;
