import { Breadcrumbs, Typography } from '@mui/material';
import React from 'react';

import { useChartWizardContext } from '../../context';

import { ChartRouterSteps } from '../../router';

type Props = {
  basePath: string;
};

const ChartWizardBreadcrumbs: React.FC<Props> = () => {
  const { currentStepDetailIndex } = useChartWizardContext();

  return (
    <Breadcrumbs>
      {ChartRouterSteps.map((generator, i) => {
        if (!generator.label?.breadcrumb) return null;
        const active = currentStepDetailIndex === i;

        return (
          <Typography key={generator.step} color={active ? 'primary' : undefined}>
            {generator.label.breadcrumb}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
};

export default ChartWizardBreadcrumbs;
