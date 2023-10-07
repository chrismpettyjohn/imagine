import React from 'react';
import { Card } from '../card/Card';
import { Grid } from '../grid/Grid';
import { Badge } from '../badge/Badge';
import { RankListContainerHeader } from './RankListContainer.styled';
import { SmallUserProfileContainerMock } from '../small-user-profile-container/SmallUserProfileContainerMock';

export function RankListContainerMock() {
  return (
    <Card>
      <RankListContainerHeader>
        <h1 style={{ cursor: 'pointer' }}>-</h1>
        <Badge badge={{ code: 'ADM' }} style={{ cursor: 'pointer' }} />
      </RankListContainerHeader>
      <Grid>
        <SmallUserProfileContainerMock />
        <SmallUserProfileContainerMock />
        <SmallUserProfileContainerMock />
      </Grid>
    </Card>
  )
}