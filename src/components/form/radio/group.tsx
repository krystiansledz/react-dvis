import { FormControl, FormLabel, RadioGroup, RadioGroupProps } from '@mui/material';
import React from 'react';
import { Controller, useFormContext, get } from 'react-hook-form';
import styled from 'styled-components';

import InlineFormHelperText from '../helpertext/inline';

import RadioFormField, { RadioFormFieldProps } from './index';

type Props = Omit<RadioGroupProps, 'name'> & {
  name: string;
  label?: string;
  options: Omit<RadioFormFieldProps, 'control'>[];
  disabled?: boolean;
};

const RadioGroupFormField: React.FC<Props> = ({ name, label, options, disabled, row, ...props }) => {
  const {
    formState: { errors, isSubmitting },
    control,
  } = useFormContext();

  const error = get(errors, name);
  const hasError = !!error?.message;
  const isDisabled = disabled || isSubmitting;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl component='div' error={hasError} disabled={isDisabled}>
          <RadioGroupWrapper row={row}>
            {label && (
              <StyledFormLabel>
                {label}
                {hasError && !row && <InlineFormHelperText>{error?.message}</InlineFormHelperText>}
              </StyledFormLabel>
            )}
            <RadioGroup sx={{ ml: '1rem' }} row={row} {...props} {...field}>
              {options.map((option) => (
                <RadioFormField key={`${option.value}`} disabled={isDisabled} {...option} />
              ))}
            </RadioGroup>
          </RadioGroupWrapper>
          {hasError && row && <InlineFormHelperText>{error?.message}</InlineFormHelperText>}
        </FormControl>
      )}
    />
  );
};

export default RadioGroupFormField;

const RadioGroupWrapper = styled.div<{ row?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  align-items: ${(props) => (props.row ? 'center' : 'start')};
`;

const StyledFormLabel = styled(FormLabel)`
  color: ${(props) => props.theme.palette.text.primary};
  font-weight: 500;
`;
