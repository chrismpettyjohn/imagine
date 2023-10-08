import React from 'react';
import { Badge } from '../badge/Badge';
import { LargeGroupContainerElement, LargeGroupContainerInformation } from './LargeGroupContainer.styled';

export function LargeGroupContainerMock() {
  return (
    <LargeGroupContainerElement>
      <Badge badge={{ code: 'FAN' } as any} />
      <LargeGroupContainerInformation>
        <h3>-</h3>
        <h5>-</h5>
      </LargeGroupContainerInformation>
    </LargeGroupContainerElement>
  )
}