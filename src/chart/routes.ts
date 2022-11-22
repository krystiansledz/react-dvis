import { ChartWizardStep } from './wizard/const';

export const Routes = {
  Chart: () => `/chart`,
  ChartCreate: (step?: ChartWizardStep) => `${Routes.Chart()}/create${step ? `/${step}` : ''}`,
};
