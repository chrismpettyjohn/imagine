import React from 'react';
import { GridProps } from './Grid.types';
import { GridElement } from './Grid.styled';

export function Grid({ children, size = 'normal', ...props }: GridProps) {
  return (
    <GridElement {...props} $size={size}>
      <>
        {children}
      </>
    </GridElement>
  )
}