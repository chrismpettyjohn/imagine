import React, { useEffect } from 'react';
import { useUsersOnlineCount } from '@imagine-cms/client';

const ONE_SECOND = 1000;

export function OnlineUserCount() {
  const usersOnlineCount = useUsersOnlineCount();

  useEffect(() => {
    const refreshInterval = setInterval(usersOnlineCount.fetch, ONE_SECOND)
    return (() => {
      clearInterval(refreshInterval);
    })
  })

  return <>{usersOnlineCount.data ?? <i className="fa fa-spinner fa-spin" style={{ marginRight: 8 }} />}</>
}