import React from 'react';
import { UserStatsGridProps } from './UserStatsGrid.types';
import { UserStatsGridElement } from './UserStatsGrid.styled';
import { CreditStatsContainerElement, DiamondStatsContainerElement, HabboClubStatsContainerElement, PixelStatsContainerElement } from './stats-container/StatsContainer.styled';

export function UserStatsGrid({ user }: UserStatsGridProps) {
  return (
    <UserStatsGridElement>
      <CreditStatsContainerElement>
        <img src="https://habbox.fr/assets/icons/credits.svg" loading="lazy" />
        <b>{user.credits?.toLocaleString()}</b>
        Credits
      </CreditStatsContainerElement>
      <DiamondStatsContainerElement>
        <img src="https://habbox.fr/assets/icons/diamonds.svg" loading="lazy" />
        <b>{user.vipPoints?.toLocaleString()}</b>
        Diamonds
      </DiamondStatsContainerElement>
      <PixelStatsContainerElement>
        <img src="https://habbox.fr/assets/icons/duckets.svg" loading="lazy" />
        <b> {user.activityPoints?.toLocaleString()}</b>
        Pixels
      </PixelStatsContainerElement>
      <HabboClubStatsContainerElement>
        <img src="https://habborator.org/badges/badges/HC1.gif" loading="lazy" />
        <b>28 days left</b>
      </HabboClubStatsContainerElement>
    </UserStatsGridElement >
  )
}