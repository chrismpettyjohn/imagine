import React from 'react';
import { Badge } from '../badge/Badge';
import { BadgeHolder } from './BadgeContainer.styled';
import { BadgeContainerProps } from './BadgeContainer.types';

export function BadgeContainer({ badge }: BadgeContainerProps) {
  return (
    <BadgeHolder>
      <Badge badge={badge} />
    </BadgeHolder>
  )
}