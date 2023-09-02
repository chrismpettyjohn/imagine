import React, { useEffect } from 'react';
import { Card } from '../../components/card/Card';
import { useFetchOnlineUsers } from '@imagine-cms/web';
import { CommunityOnlinePlayersScreenUsersContainer } from './CommunityOnlinePlayersScreen.styled';
import { SmallUserProfileContainer } from '../../components/small-user-profile-container/SmallUserProfileContainer';

export function CommunityOnlinePlayersScreen() {
  const { runQuery, loading, data } = useFetchOnlineUsers();

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  if (loading) {
    return <i className="fa fa-spinner fa-spin" />
  }

  return (
    <Card>
      <h1>Online Users ({data?.users?.length})</h1>
      {
        loading && <i className="fa fa-spinner fa-spin" />
      }
      <CommunityOnlinePlayersScreenUsersContainer>
        {
          data?.users?.map(user => (
            <SmallUserProfileContainer key={`online_user_${user.onlineStatus}`} user={user} />
          ))
        }
      </CommunityOnlinePlayersScreenUsersContainer>
    </Card>
  )
}
