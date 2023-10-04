import React, { useEffect } from 'react';
import { useUsersOnlineCount } from '@imagine-cms/client';
import { OnlineUserCountElement } from './OnlineUserCount.styled';

const ONE_SECOND = 1000;

export function OnlineUserCount() {
  const usersOnlineCount = useUsersOnlineCount();

  useEffect(() => {
    const refreshInterval = setInterval(usersOnlineCount.fetch, ONE_SECOND)
    return (() => {
      clearInterval(refreshInterval);
    })
  })

  return <OnlineUserCountElement><i className="fa fa-users" style={{ marginRight: 8 }} /><b>{usersOnlineCount.data ? Number(usersOnlineCount.data).toLocaleString() : <i className="fa fa-spinner fa-spin" />}</b> users online</OnlineUserCountElement>
}