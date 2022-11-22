import React from 'react';
import { Controller, ControllerProps, useFormContext } from 'react-hook-form';

import StyledFormField from '../styled';

interface Props {
  name: string;
  render: ControllerProps['render'];
}

const ControlledFormField: React.FC<Props> = ({ name, render }) => {
  const { control } = useFormContext();

  return (
    <StyledFormField>
      <Controller name={name} control={control} render={render} />
    </StyledFormField>
  );
};

export default ControlledFormField;
