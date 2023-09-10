import React from 'react';
import { ButtonProps } from './Button.types';
import { ButtonElement } from './Button.styled';

export function Button({ children, ...props }: ButtonProps) {
  return (
    <ButtonElement {...props}>
      {children}
    </ButtonElement>
  )
}