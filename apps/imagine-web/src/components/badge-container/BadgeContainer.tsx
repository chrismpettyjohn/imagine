import React from 'react';
import { Badge } from '../badge/Badge';
import { BadgeHolder } from './BadgeContainer.styled';
import { BadgeContainerProps } from './BadgeContainer.types';
import { Link } from 'wouter';

export function BadgeContainer({ badge }: BadgeContainerProps) {
  return (
    <Link to={`/badges/${badge.code}`}>
      <BadgeHolder>
        <Badge badge={badge} />
      </BadgeHolder>
    </Link>
  )
}