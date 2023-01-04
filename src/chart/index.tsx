import Router from './wizard/router';
import React from 'react';
import ChartProvider, { ChartStepsPartial, useChartWizardContext } from './wizard/context';
import ActionBar from '../components/wizard/footer';
import { Config, Data } from './types';

type Props = {
  data: Data;
  config: Config;
  basePath?: string;
};

const ChartGenerator: React.FC<Props> = ({ data, config, basePath = '' }) => {
  return (
    <ChartProvider data={data} config={config} basePath={basePath}>
      <Router basePath={basePath} />
      <ActionBar<ChartStepsPartial> useWizardContext={useChartWizardContext} />
    </ChartProvider>
  );
};

export default ChartGenerator;
