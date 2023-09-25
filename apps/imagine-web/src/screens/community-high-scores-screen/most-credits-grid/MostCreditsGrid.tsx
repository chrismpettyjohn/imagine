import React, { useEffect } from 'react';
import { Card } from '../../../components/card/Card';
import { UserOrderBy, useUserFetchMany } from '@imagine-cms/client';
import { SmallUserProfileContainer } from '../../../components/small-user-profile-container/SmallUserProfileContainer';

export function MostCreditsGrid() {
  const fetchUsers = useUserFetchMany();

  useEffect(() => {
    fetchUsers.fetch({
      orderBy: [UserOrderBy.CREDITS_ASC],
      limit: 5,
    })
  }, []);

  return (
    <Card header="Most Credits">
      <div style={{ display: 'flex', flex: 1, gap: 16 }}>
        {
          fetchUsers.loading && <i className="fa fa-spinner fa-spin" />
        }
        {
          fetchUsers.data?.map(_ => (
            <SmallUserProfileContainer key={`most_credits_${_.id}`} user={_ as any}>
              <div style={{ display: 'flex', flex: 1, gap: 8, justifyContent: 'center', alignContent: 'center' }}>
                <img src="/img/credits.svg" />
                <b>{Number(_.credits).toLocaleString()} Credits</b>
              </div>
            </SmallUserProfileContainer>
          ))
        }
      </div>
    </Card >
  )
}