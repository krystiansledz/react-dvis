import { RadioFormField } from "../../../../../components/form";
import { LoadType, LoadTypes } from "./types";
import React, { useState } from "react";
import { getOptionsFromRecord } from "../../../../../utils/form";
import styled from "styled-components";
import Forms from "./forms";

const GeneratorWizardLoadPage = () => {
  const [loadType, setLoadType] = useState(LoadType.Input);

  const handleChangeRadio = (value: string) => {
    setLoadType(value as LoadType);
  };

  return (
    <Container>
      <RadioForm>
        <label>Load your data by:</label>
        <div>
          {getOptionsFromRecord(LoadTypes).map((option) => (
            <RadioFormField
              key={option.value}
              name="plan_type"
              onChange={() => handleChangeRadio(option.value)}
              checked={loadType === option.value}
              {...option}
            />
          ))}
        </div>
      </RadioForm>
      <Forms loadType={loadType} />
    </Container>
  );
};

export default GeneratorWizardLoadPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RadioForm = styled.form`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
