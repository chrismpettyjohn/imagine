import React, { useEffect } from 'react';
import { Card } from '../../components/card/Card';
import { useUserFetchMany } from '@imagine-cms/client';
import { CommunityOnlinePlayersScreenUsersContainer } from './CommunityOnlinePlayersScreen.styled';
import { SmallUserProfileContainer } from '../../components/small-user-profile-container/SmallUserProfileContainer';
import { LoadingMessage } from '../../components/loading-message/LoadingMessage';

export function CommunityOnlinePlayersScreen() {
  const { data, fetch, loading } = useUserFetchMany();

  useEffect(() => {
    fetch({ online: true, limit: 1000 });
  }, []);

  return (
    <Card header="Online Users">
      {
        loading && (
          <LoadingMessage>
            Loading online players
          </LoadingMessage>
        )
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
