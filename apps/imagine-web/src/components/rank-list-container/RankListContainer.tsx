import { Link } from 'wouter';
import { Grid } from '../grid/Grid';
import { Card } from '../card/Card';
import { Badge } from '../badge/Badge';
import { GridLarge } from '../grid/Grid.remix';
import React, { useEffect, useState } from 'react';
import { useUserFetchMany } from '@imagine-cms/client';
import { ButtonBrand, ButtonNoBorder } from '../button/Button.remix';
import { RankListContainerProps } from './RankListContainer.types';
import { RankListContainerHeader } from './RankListContainer.styled';
import { SmallUserProfileContainer } from '../small-user-profile-container/SmallUserProfileContainer';
import { SmallUserProfileContainerMock } from '../small-user-profile-container/SmallUserProfileContainerMock';

const USER_LIMIT = 25;

export function RankListContainer({ rank }: RankListContainerProps) {
  const [page, setPage] = useState(0);
  const fetchRankUsers = useUserFetchMany();

  const canGoDown = page > 0;
  const canGoUp = (fetchRankUsers?.data?.length ?? 0) >= USER_LIMIT;

  const goBackOnePage = () => {
    if (!canGoDown) {
      return;
    }
    setPage(_ => _ - 1)
  };
  const goUpOnePage = () => {
    if (!canGoUp) {
      return;
    }
    setPage(_ => _ + 1);
  }

  useEffect(() => {
    fetchRankUsers.fetch({ rankIDs: [rank.id], skip: page * USER_LIMIT, limit: USER_LIMIT })
  }, [rank.id, page]);

  return (
    <Card>
      <RankListContainerHeader>
        <Link to={`/ranks/${rank.id}`}>
          <h1 style={{ cursor: 'pointer' }}>{rank.name}</h1>
        </Link>
        <Link to={`/ranks/${rank.id}`}>
          <Badge badge={{ code: rank.badgeCode }} style={{ cursor: 'pointer' }} />
        </Link>
      </RankListContainerHeader>
      <Grid>      {
        fetchRankUsers.loading && (
          <>
            <SmallUserProfileContainerMock />
            <SmallUserProfileContainerMock />
            <SmallUserProfileContainerMock />
            <SmallUserProfileContainerMock />
          </>
        )
      }
        {
          fetchRankUsers.data?.map(_ => (
            <SmallUserProfileContainer key={`rank_${rank.id}_user_${_.id}`} user={_ as any} />
          ))
        }
      </Grid>
      <GridLarge>
        {canGoDown ?
          <ButtonNoBorder onClick={goBackOnePage}>
            <i className={fetchRankUsers.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-left'} />
          </ButtonNoBorder>
          : <div />}
        {
          canGoUp && (
            <ButtonNoBorder onClick={goUpOnePage}>
              <i className={fetchRankUsers.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-right'} />
            </ButtonNoBorder>
          )
        }
      </GridLarge>
      {
        rank.flags?.acceptingApplications && (
          <Link to={`/community/staff/${rank.id}/apply`}>
            <ButtonBrand>Apply for Role</ButtonBrand>
          </Link>
        )
      }
    </Card>
  )
}