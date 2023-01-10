import { yupResolver } from '@hookform/resolvers/yup';
import React, { ReactNode, PropsWithoutRef } from 'react';
import { FormProvider, useForm, UseFormProps } from 'react-hook-form';
import * as y from 'yup';

export interface FormProps<S extends y.AnyObjectSchema>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements['form']>, 'onSubmit'> {
  children: ReactNode;
  schema?: S;
  onSubmit?: (values: y.Asserts<S>) => void;
  initialValues?: UseFormProps<y.Asserts<S>>['defaultValues'];
}

export function Form<S extends y.AnyObjectSchema>({
  children,
  schema,
  initialValues,
  onSubmit,
  ...props
}: FormProps<S>) {
  const ctx = useForm<y.Asserts<S>>({
    mode: 'onBlur',
    resolver: schema ? yupResolver(schema) : undefined,
    defaultValues: initialValues,
  });

  return (
    <FormProvider {...ctx}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (onSubmit) ctx.handleSubmit(onSubmit);
        }}
        className='form'
        noValidate // disable browser validation
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default Form;
