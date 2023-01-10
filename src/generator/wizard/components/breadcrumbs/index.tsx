import { Breadcrumbs, Typography } from '@mui/material';

import { useGeneratorWizardContext } from '../../context';

import { GeneratorRouterSteps } from '../../router';
import React from 'react';

const GeneratorWizardBreadcrumbs = () => {
  const { currentStepDetailIndex } = useGeneratorWizardContext();

  return (
    <Breadcrumbs>
      {GeneratorRouterSteps.map((generator, i) => {
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

export default GeneratorWizardBreadcrumbs;
