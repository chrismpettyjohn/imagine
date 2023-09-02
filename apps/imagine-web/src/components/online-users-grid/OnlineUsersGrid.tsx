import { Card } from '../card/Card';
import React, { useEffect } from 'react';
import { useFetchOnlineUsers } from '@imagine-cms/web';
import { SmallUserProfileContainer } from '../small-user-profile-container/SmallUserProfileContainer';

export function OnlineUsersGrid() {
  const { runQuery, loading, data } = useFetchOnlineUsers();

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  if (loading) {
    return <i className="fa fa-spinner fa-spin" />
  }

  return (
    <Card>
      <h1>Online Users</h1>
      {
        loading && <i className="fa fa-spinner fa-spin" />
      }
      {
        data?.users?.map(user => (
          <SmallUserProfileContainer key={`online_user_${user.onlineStatus}`} user={user} />
        ))
      }
    </Card>
  )
}
