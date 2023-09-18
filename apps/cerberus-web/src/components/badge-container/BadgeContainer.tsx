import React from 'react';
import { Badge } from '../../blocks/badge/Badge';
import { BadgeHolder } from './BadgeContainer.styled';
import { BadgeContainerProps } from './BadgeContainer.types';

export function BadgeContainer({ badge, ...props }: BadgeContainerProps) {
  return (
    <BadgeHolder>
      <Badge badge={badge} {...props as any} />
    </BadgeHolder>
  )
}