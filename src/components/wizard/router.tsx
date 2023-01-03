import React from 'react';
import { Route, Routes } from 'react-router';
import { StepDetail } from './types';
import WizardStepsPage from './page';

type Props<WizardStep extends string, StepsPartial> = {
  routerSteps: readonly StepDetail<WizardStep, StepsPartial>[];
  appRoute: string;
  breadcrumbs: React.ReactElement;
};

const Router = <WizardStep extends string, StepsPartial>({
  routerSteps,
  appRoute,
  breadcrumbs,
}: Props<WizardStep, StepsPartial>) => {
  return (
    <Routes>
      {JSON.stringify(routerSteps)}
      {routerSteps.map((step) => (
        <Route
          key={step.step}
          path={step.path.replace(appRoute, '')}
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
