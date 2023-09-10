import React from 'react';
import { InputProps } from './Input.types';
import { InputElement } from './Input.styled';

export function Input({ ...props }: InputProps) {
  return <InputElement {...props} />
}