import React, { useEffect } from 'react';
import { Card } from '../../components/card/Card';
import { useUserFetchMany } from '@imagine-cms/client';
import { CommunityOnlinePlayersScreenUsersContainer } from './CommunityOnlinePlayersScreen.styled';
import { SmallUserProfileContainer } from '../../components/small-user-profile-container/SmallUserProfileContainer';

export function CommunityOnlinePlayersScreen() {
  const { data, fetch, loading } = useUserFetchMany();

  useEffect(() => {
    fetch({ online: true, limit: 1000 });
  }, []);

  if (loading) {
    return <i className="fa fa-spinner fa-spin" />
  }

  return (
    <Card>
      <h1>Online Users ({data?.length})</h1>
      {
        loading && <i className="fa fa-spinner fa-spin" />
      }
      <CommunityOnlinePlayersScreenUsersContainer>
        {
          data?.map(user => (
            <SmallUserProfileContainer key={`online_user_${user.id}`} user={user as any} showOnlineStatus={false} />
          ))
        }
      </CommunityOnlinePlayersScreenUsersContainer>
    </Card>
  )
}
