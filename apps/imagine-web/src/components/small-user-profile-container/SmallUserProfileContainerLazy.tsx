import React, { useEffect } from 'react';
import { useUserFetchOne } from '@imagine-cms/client';
import { LoadingMessage } from '../loading-message/LoadingMessage';
import { SmallUserProfileContainer } from './SmallUserProfileContainer';

export function SmallUserProfileContainerLazy({ userID }: { userID: number }) {
  const fetchUser = useUserFetchOne();
  const onFetchUser = async () => {
    fetchUser.fetch({ id: userID });
  }
  useEffect(() => {
    onFetchUser();
  }, [userID]);

  if (!fetchUser.data) {
    return (
      <LoadingMessage>
        Loading user
      </LoadingMessage>
    )
  }

  return <SmallUserProfileContainer user={fetchUser.data as any} />
}