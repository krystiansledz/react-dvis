import { Container, Paper } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const FooterActionBar: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <StyledPaper>
      <StyledContentContainer>{children}</StyledContentContainer>
    </StyledPaper>
  );
};

export default FooterActionBar;

const StyledContentContainer = styled(Container).attrs(() => ({
  maxWidth: 'lg',
}))`
  padding: 1rem;
`;

const StyledPaper = styled(Paper)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1100;
  box-shadow: ${(props) => props.theme.shadows[13]};
`;
