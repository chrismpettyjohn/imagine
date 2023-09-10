import React from 'react';
import { FormProps } from './Form.types';
import { FormElement } from './Form.styled';

export function Form({ ...props }: FormProps) {
  return <FormElement {...props} />
}