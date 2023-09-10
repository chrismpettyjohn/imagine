import { useRoute } from 'wouter';
import React, { useEffect } from 'react';
import { Card } from '../../blocks/card/Card';
import { useUserFetchOne } from '@imagine-cms/client';
import { UserBadgesCard } from '../../components/user-badges-card/UserBadgesCard';
import { UserPossibleAltsCard } from '../../components/user-possible-alts-card/UserPossibleAltsCard';
import { UserSanctionHistoryCard } from '../../components/user-sanction-history-card/UserSanctionHistoryCard';

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
            <UserSanctionHistoryCard user={user} />
            <Card header="Player Stats">
              hoe
            </Card>
            <UserBadgesCard user={user} />
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