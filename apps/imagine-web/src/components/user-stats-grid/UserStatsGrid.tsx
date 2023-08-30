import React from 'react';
import { UserStatsGridProps } from './UserStatsGrid.types';
import { UserStatsGridElement } from './UserStatsGrid.styled';
import { StatsContainer } from './stats-container/StatsContainer';

export function UserStatsGrid({ user }: UserStatsGridProps) {
  return (
    <UserStatsGridElement>
      <StatsContainer imageURL="https://habbox.fr/assets/icons/credits.svg" label="Credits" value={1592402} />
      <StatsContainer imageURL="https://habbox.fr/assets/icons/diamonds.svg" label="Diamonds" value={400} />
      <StatsContainer imageURL="https://habbox.fr/assets/icons/duckets.svg" label="Pixels" value={20000} />
      <StatsContainer imageURL="https://habborator.org/badges/badges/HC1.gif" label="Days Left" value={28} />
    </UserStatsGridElement>
  )
}