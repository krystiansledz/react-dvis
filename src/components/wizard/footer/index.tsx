import styled from 'styled-components';

import { CancelButton, ContinueButton, SaveButton } from '../../ui/Buttons';
import FooterActionBar from './action';
import { Typography } from '@mui/material';
import { WizardContext } from '../types';
import React from 'react';

type Props<TStepsPartial> = {
  useWizardContext: () => WizardContext<TStepsPartial>;
};

function WizardFooterActionBar<TStepsPartial>({ useWizardContext }: Props<TStepsPartial>) {
  const { isLastStep, next, error, cancel } = useWizardContext();

  return (
    <FooterActionBar>
      <ButtonsContainer>
        <div>{error && <Typography color='error'>Error: {error}</Typography>}</div>

        <RightButtons>
          <CancelButton onClick={cancel}>Cancel</CancelButton>
          {isLastStep ? (
            <SaveButton onClick={next}>Save</SaveButton>
          ) : (
            <ContinueButton onClick={next}>Continue</ContinueButton>
          )}
        </RightButtons>
      </ButtonsContainer>
    </FooterActionBar>
  );
}
export default WizardFooterActionBar;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RightButtons = styled.div`
  display: flex;
  gap: 1rem;
`;
