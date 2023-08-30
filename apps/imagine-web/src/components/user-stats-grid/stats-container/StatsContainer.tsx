import React from 'react';
import { StatsContainerProps } from './StatsContainer.types';
import { StatsContainerElement } from './StatsContainer.styled';

export function StatsContainer({ imageURL, label, value }: StatsContainerProps) {
  return (
    <StatsContainerElement>
      <img src={imageURL} />
      {value.toLocaleString()} {label}
    </StatsContainerElement>
  )
}