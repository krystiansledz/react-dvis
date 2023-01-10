import Router from './router';
import React from 'react';
import ActionBar from '../../components/wizard/footer';
import GeneratorProvider, { GeneratorStepsPartial, useGeneratorWizardContext } from './context';
import styled from 'styled-components';
import { Container } from '@mui/material';

const Generator: React.FC = () => {
  return (
    <GeneratorProvider>
      <GeneratorPageContainer>
        <Router />
      </GeneratorPageContainer>
      <ActionBar<GeneratorStepsPartial> useWizardContext={useGeneratorWizardContext} />
    </GeneratorProvider>
  );
};

export default Generator;

const GeneratorPageContainer = styled(Container).attrs(() => ({
  maxWidth: 'lg',
}))`
  padding: 1rem;
`;
