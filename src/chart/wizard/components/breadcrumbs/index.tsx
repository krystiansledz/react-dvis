import { Breadcrumbs } from '@mui/material';
import React from 'react';

import { useChartWizardContext } from '../../context';

import ChartWizardBreadcrumbsLink from '../../../../components/wizard/breadcrumbs/link';
import { ChartRouterSteps, getChartStepRoute } from '../../router';

const ChartWizardBreadcrumbs = () => {
  const { currentStepDetailIndex } = useChartWizardContext();

  return (
    <Breadcrumbs>
      {ChartRouterSteps.map((generator, i) => {
        if (!generator.label?.breadcrumb) return null;

        const route = getChartStepRoute(generator.step);

        return (
          <ChartWizardBreadcrumbsLink
            key={generator.step}
            url={route}
            label={generator.label.breadcrumb}
            active={currentStepDetailIndex === i}
            disabled={i >= currentStepDetailIndex} // disable current and future steps
          />
        );
      })}
    </Breadcrumbs>
  );
};

export default ChartWizardBreadcrumbs;
