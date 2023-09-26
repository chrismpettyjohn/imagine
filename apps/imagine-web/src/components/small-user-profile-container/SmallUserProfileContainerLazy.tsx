import React, { useEffect } from 'react';
import { useUserFetchOne } from '@imagine-cms/client';
import { SmallUserProfileContainer } from './SmallUserProfileContainer';
import { SmallUserProfileContainerMock } from './SmallUserProfileContainerMock';

export function SmallUserProfileContainerLazy({ userID }: { userID: number }) {
  const fetchUser = useUserFetchOne();
  const onFetchUser = async () => {
    fetchUser.fetch({ id: userID });
  }
  useEffect(() => {
    onFetchUser();
  }, [userID]);

  if (!fetchUser.data) {
    return <SmallUserProfileContainerMock />
  }

  return <SmallUserProfileContainer user={fetchUser.data as any} />
}