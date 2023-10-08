import React from 'react';
import { Link } from 'wouter';
import { Badge } from '../badge/Badge';
import { GridLarge } from '../grid/Grid.remix';
import { UserStatsGridProps } from './UserStatsGrid.types';
import { CreditStatsContainerElement, DiamondStatsContainerElement, HabboClubStatsContainerElement, PixelStatsContainerElement } from './stats-container/StatsContainer.styled';

export function UserStatsGrid({ user }: UserStatsGridProps) {
  return (
    <GridLarge>
      <CreditStatsContainerElement>
        <img src="/img/credits.svg" loading="lazy" />
        <b>{user.credits?.toLocaleString()}</b>
      </CreditStatsContainerElement>
      <DiamondStatsContainerElement>
        <img src="/img/diamonds.svg" loading="lazy" />
        <b>{user.vipPoints?.toLocaleString()}</b>
      </DiamondStatsContainerElement>
      <PixelStatsContainerElement>
        <img src="/img/duckets.svg" loading="lazy" />
        <b> {user.activityPoints?.toLocaleString()}</b>
      </PixelStatsContainerElement>
      <Link to={`/ranks/${user.rank?.id}`}>
        <HabboClubStatsContainerElement style={{ background: user.rank.backgroundColor, cursor: 'pointer' }}>
          <Badge badge={{ code: user.rank?.badgeCode }} />
          <b>{user.rank?.name}</b>
        </HabboClubStatsContainerElement>
      </Link>
    </GridLarge>
  )
}