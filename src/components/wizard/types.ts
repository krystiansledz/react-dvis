import { AnyObjectSchema } from 'yup';
import React from 'react';

export type StepDetail<TWizardStep extends string, TStepsPartial> = {
  step: TWizardStep;
  label?: {
    title: string;
    description: string;
    breadcrumb: string;
  };
  schema?: AnyObjectSchema;
  page: React.ReactNode;
  path: string;
  validation?: (data: TStepsPartial) => Promise<StepValidationError | undefined>;
  prepareStep?: (state: TStepsPartial, save: (data: TStepsPartial) => void) => void;
  beforeNextStep?: (state: TStepsPartial, save: (data: TStepsPartial) => void) => void;
};

export type StepValidationError = {
  message: string;
};

export type WizardContext<TStepsPartial> = {
  save: (data: TStepsPartial) => void;
  next: () => void;
  back: () => void;
  cancel: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  currentStepDetailIndex: number;
  data: TStepsPartial;
  error: string | undefined;
};
