import styled from "styled-components";
import React from "react";

type Props = {
  title?: string;
  description?: string;
};

const WizardStepsPage: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  title,
  description,
}) => {
  return (
    <Container>
      <div>
        {title && <h1>{title}</h1>}
        {description && <h4>{description}</h4>}
      </div>

      {children}
    </Container>
  );
};

export default WizardStepsPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 32px;
`;
