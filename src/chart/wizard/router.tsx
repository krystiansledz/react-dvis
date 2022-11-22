import { ChartWizardStep } from './const';
import Router from '../../components/wizard/router';
import { ChartStepDetail } from './types';
import { ChartStepsPartial } from './context';
import ChartWizardBreadcrumbs from './components/breadcrumbs';
import ChartWizardAdjustPage from './components/pages/adjust';
import ChartWizardCreatePage from './components/pages/create';
import { downloadChartAsPng } from '../utils';
import ChartWizardFilterPage from './components/pages/filter';
import { Routes } from '../routes';
import React from 'react';

export const getChartStepRoute = (step: ChartWizardStep) => {
  return `${Routes.ChartCreate(step)}`;
};

const ChartRouter = () => (
  <Router<ChartWizardStep, ChartStepsPartial>
    routerSteps={ChartRouterSteps}
    appRoute={Routes.Chart()}
    breadcrumbs={<ChartWizardBreadcrumbs />}
  />
);

export default ChartRouter;

export const ChartRouterSteps: Readonly<ChartStepDetail[]> = [
  {
    step: ChartWizardStep.Adjust,
    label: {
      title: 'Adjust data',
      description: 'Adjust data name and format.',
      breadcrumb: 'Adjust',
    },
    page: <ChartWizardAdjustPage />,
    path: Routes.ChartCreate(ChartWizardStep.Adjust),
  },
  {
    step: ChartWizardStep.Filter,
    label: {
      title: 'Filter data',
      description: 'Filter your data',
      breadcrumb: 'Filter',
    },
    page: <ChartWizardFilterPage />,
    path: Routes.ChartCreate(ChartWizardStep.Filter),
  },
  {
    step: ChartWizardStep.Create,
    label: {
      title: 'Create chart',
      description: 'Select fields for axis',
      breadcrumb: 'Create',
    },
    page: <ChartWizardCreatePage />,
    path: Routes.ChartCreate(ChartWizardStep.Create),
    beforeNextStep: downloadChartAsPng,
  },
];
