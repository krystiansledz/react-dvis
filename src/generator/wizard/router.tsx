import React from 'react';
import { GeneratorWizardStep } from './const';
import { AppRoutes } from '../../router/appRoutes';
import GeneratorWizardLoadPage from './components/pages/load';
import GeneratorWizardAdjustPage from './components/pages/adjust';
import { GeneratorStepsPartial } from './context';
import { prepareStepAdjust, saveConfigFile, validationStepLoad } from '../utils';
import Router from '../../components/wizard/router';
import { GeneratorStepDetail } from './types';
import GeneratorWizardBreadcrumbs from './components/breadcrumbs';

export const getGeneratorStepRoute = (step: GeneratorWizardStep) => {
  return `${AppRoutes.GeneratorCreate(step)}`;
};

const GeneratorRouter: React.FC = () => (
  <Router<GeneratorWizardStep, GeneratorStepsPartial>
    routerSteps={GeneratorRouterSteps}
    breadcrumbs={<GeneratorWizardBreadcrumbs />}
  />
);

export default GeneratorRouter;

export const GeneratorRouterSteps: Readonly<GeneratorStepDetail[]> = [
  {
    step: GeneratorWizardStep.Load,
    label: {
      title: 'Load data',
      description: 'Load data that is an array of objects.',
      breadcrumb: 'Load',
    },
    page: <GeneratorWizardLoadPage />,
    path: AppRoutes.GeneratorCreate(GeneratorWizardStep.Load),
    validation: validationStepLoad,
  },
  {
    step: GeneratorWizardStep.Adjust,
    label: {
      title: 'Adjust types',
      description: 'Adjust types of fields in an object.',
      breadcrumb: 'Adjust',
    },
    page: <GeneratorWizardAdjustPage />,
    path: AppRoutes.GeneratorCreate(GeneratorWizardStep.Adjust),
    prepareStep: prepareStepAdjust,
    beforeNextStep: saveConfigFile,
  },
];
