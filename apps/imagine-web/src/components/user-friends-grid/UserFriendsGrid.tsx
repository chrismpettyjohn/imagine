import { Card } from '../card/Card';
import { Grid } from '../grid/Grid';
import { GridLarge } from '../grid/Grid.remix';
import React, { useEffect, useState } from 'react';
import { ButtonNoBorder } from '../button/Button.remix';
import { useFriendshipFetchMany } from '@imagine-cms/client';
import { UserFriendsGridProps } from './UserFriendsGrid.types';
import { SmallUserProfileContainer } from '../small-user-profile-container/SmallUserProfileContainer';
import { SmallUserProfileContainerMock } from '../small-user-profile-container/SmallUserProfileContainerMock';

const FRIENDS_PAGE_SIZE = 4;

export function UserFriendsGrid({ user }: UserFriendsGridProps) {
  const [page, setPage] = useState(0);
  const friendshipFetch = useFriendshipFetchMany();

  const canGoUp = (friendshipFetch?.data?.length ?? 0) >= FRIENDS_PAGE_SIZE

  const canGoDown = page > 0;

  const goUpOnePage = () => {
    if (!canGoUp) {
      return;
    }
    setPage(_ => _ + 1);
  }

  const goBackOnePage = () => {
    if (!canGoDown) {
      return;
    }
    setPage(_ => _ - 1);
  }


  useEffect(() => {
    friendshipFetch.fetch({ userID: user.id, skip: FRIENDS_PAGE_SIZE * page, limit: FRIENDS_PAGE_SIZE })
  }, [user.id, page]);

  return (
    <Card header={<>My Friends {page > 0 && <small>Page {page + 1}</small>}</>} headerImage="/img/friend-icon.png">
      <Grid>
        {
          friendshipFetch.data?.length === 0 && <p>You don't have any friends</p>
        }

        {
          friendshipFetch.loading && (
            <>
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
            </>
          )
        }
        {
          friendshipFetch.data?.map(_ => (
            <SmallUserProfileContainer key={`friendship_${_.friendID}`} user={_.friend as any} />
          ))
        }
      </Grid>
      <GridLarge>
        {canGoDown ?
          <ButtonNoBorder onClick={goBackOnePage}>
            <i className={friendshipFetch.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-left'} />
          </ButtonNoBorder>
          : <div />}
        {
          canGoUp && (
            <ButtonNoBorder onClick={goUpOnePage}>
              <i className={friendshipFetch.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-right'} />
            </ButtonNoBorder>
          )
        }
      </GridLarge>
    </Card>
  )
}