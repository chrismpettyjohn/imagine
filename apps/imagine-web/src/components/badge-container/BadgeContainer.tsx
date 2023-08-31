import React from 'react';
import { BadgeContainerProps } from './BadgeContainer.types';
import { BadgeHolder } from './BadgeContainer.styled';

export function BadgeContainer({ badge }: BadgeContainerProps) {
  return (
    <BadgeHolder>
      <img src={`https://habborator.org/badges/badges/${badge.code}.gif`} />
    </BadgeHolder>
  )
}