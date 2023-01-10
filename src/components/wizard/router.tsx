import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { StepDetail } from './types';
import WizardStepsPage from './page';

type Props<WizardStep extends string, StepsPartial> = {
  routerSteps: readonly StepDetail<WizardStep, StepsPartial>[];
  breadcrumbs: React.ReactElement;
};

const Router = <WizardStep extends string, StepsPartial>({
  routerSteps,
  breadcrumbs,
}: Props<WizardStep, StepsPartial>) => {
  return (
    <Routes>
      {routerSteps.map((step) => (
        <Route
          key={step.step}
          path={step.path}
          element={
            <React.Fragment>
              {step.label?.breadcrumb && breadcrumbs}
              <WizardStepsPage title={step.label?.title} description={step.label?.description}>
                {step.page}
              </WizardStepsPage>
            </React.Fragment>
          }
        />
      ))}
    </Routes>
  );
};

export default Router;
