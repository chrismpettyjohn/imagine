import React, { useEffect } from 'react';
import { useRoute } from 'wouter';
import { Card } from '../../blocks/card/Card';
import { UserPossibleAltsCard } from '../../components/user-possible-alts-card/UserPossibleAltsCard';
import { useUserFetchOne } from '@imagine-cms/client';

export function UserEditProfileScreen() {
  const [, params] = useRoute<{ username: string }>('/users/:username');

  const fetchUser = useUserFetchOne();

  useEffect(() => {
    fetchUser.fetch({ username: params!.username });
  }, [params!.username]);

  const user = fetchUser?.data;

  return (
    <>
      <h1>Users <small>-&nbsp;{params!.username}</small></h1>
      {
        user && (
          <>
            <Card header="About">
              hoe
            </Card>
            <UserPossibleAltsCard user={user} />
            <Card header="Sanction History">
              hoe
            </Card>
            <Card header="Player Stats">
              hoe
            </Card>
            <Card header="Badges">
              hoe
            </Card>
            <Card header="Rooms">
              hoe
            </Card>
            <Card header="Trades">
              hoe
            </Card>
            <Card header="Inventory">
              hoe
            </Card>
            <Card header="Furniture">
              hoe
            </Card>
          </>
        )
      }
    </>
  )
}