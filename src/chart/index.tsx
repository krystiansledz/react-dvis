import Router from './wizard/router';
import React from 'react';
import ChartProvider, { ChartStepsPartial, useChartWizardContext } from './wizard/context';
import styled from 'styled-components';
import { Container } from '@mui/material';
import ActionBar from '../components/wizard/footer';
import { Config, Data } from './types';

type Props = {
  data: Data;
  config: Config;
};

const ChartGenerator: React.FC<Props> = ({ data, config }) => {
  return (
    <ChartProvider data={data} config={config}>
      <PageContainer>
        test
        <Router />
      </PageContainer>
      <ActionBar<ChartStepsPartial> useWizardContext={useChartWizardContext} />
    </ChartProvider>
  );
};

export default ChartGenerator;

const PageContainer = styled(Container).attrs(() => ({
  maxWidth: 'lg',
}))`
  padding: 1rem;
  padding-bottom: 3rem;
`;
