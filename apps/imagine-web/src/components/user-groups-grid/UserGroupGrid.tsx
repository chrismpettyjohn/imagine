import { Card } from '../card/Card';
import { Grid } from '../grid/Grid';
import React, { useEffect } from 'react';
import { UserGroupGridProps } from './UserGroupGrid.types';
import { useGroupMembershipFetchMany } from '@imagine-cms/client';
import { GroupGridContainer } from '../group-grid-container/GroupGridContainer';
import { GroupGridContainerMock } from '../group-grid-container/GroupGridContainerMock';

export function UserGroupsGrid({ user }: UserGroupGridProps) {
  const groupMemberships = useGroupMembershipFetchMany();

  useEffect(() => {
    groupMemberships.fetch({ userIDs: [user.id], limit: 8 })
  }, [user.id]);

  return (
    <Card header="My Groups" headerImage="https://www.habboassets.com/assets/images/catalog/icons/icon_203.png">
      <Grid>
        {
          groupMemberships.loading && (
            <>
              <GroupGridContainerMock />
            </>
          )
        }
        {
          groupMemberships.data?.length === 0 && <p>You're not in any groups</p>
        }
        {
          groupMemberships.data?.map(_ => (
            <GroupGridContainer key={`group_memberships_${_.id}`} group={_.group} />
          ))
        }
      </Grid>
    </Card>
  )
}