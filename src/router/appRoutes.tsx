import { GeneratorWizardStep } from '../generator/wizard/const';

export const AppRoutes = {
  BaseUrl: () => `/`,
  Generator: () => `/generator`,
  GeneratorCreate: (step?: GeneratorWizardStep) => `${AppRoutes.Generator()}/create${step ? `/${step}` : ''}`,
};
