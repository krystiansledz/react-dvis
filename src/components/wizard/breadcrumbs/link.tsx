import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

type Props = {
  url: string;
  label: string;
  disabled: boolean;
  active: boolean;
};

const WizardBreadcrumbsLink: React.FC<Props> = ({ url, label, disabled, active }) => {
  return (
    <StyledLink $active={active} to={url} disabled={disabled}>
      {label}
    </StyledLink>
  );
};
export default WizardBreadcrumbsLink;

// by adding $ to active, styled component consumed it instead pass it to Link
// https://styled-components.com/docs/api#transient-props
const StyledLink = styled(Link)<{ $active: boolean; disabled: boolean }>`
  // increase specificity to override default link color
  &:is(&) {
    color: ${(props) => (props.$active ? props.theme.palette.primary.main : props.theme.palette.grey[400])};
  }

  pointer-events: ${(props) => (props.disabled ? 'none' : undefined)};
`;
