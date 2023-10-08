import { Card } from '../card/Card';
import { Grid } from '../grid/Grid';
import { GridLarge } from '../grid/Grid.remix';
import React, { useEffect, useState } from 'react';
import { ButtonNoBorder } from '../button/Button.remix';
import { UserGroupGridProps } from './UserGroupGrid.types';
import { useGroupMembershipFetchMany } from '@imagine-cms/client';
import { GroupGridContainer } from '../group-grid-container/GroupGridContainer';
import { GroupGridContainerMock } from '../group-grid-container/GroupGridContainerMock';

const GROUPS_PAGE_SIZE = 4;

export function UserGroupsGrid({ user }: UserGroupGridProps) {
  const [page, setPage] = useState(0);
  const groupMemberships = useGroupMembershipFetchMany();

  const canGoUp = (groupMemberships?.data?.length ?? 0) >= GROUPS_PAGE_SIZE

  const canGoDown = page > 0;

  const goUpOnePage = () => {
    if (!canGoUp) {
      return;
    }
    setPage(_ => _ + 1);
  }

  const goBackOnePage = () => {
    if (!canGoDown) {
      return;
    }
    setPage(_ => _ - 1);
  }


  useEffect(() => {
    groupMemberships.fetch({ userIDs: [user.id], skip: GROUPS_PAGE_SIZE * page, limit: 8 })
  }, [user.id, page]);

  return (
    <Card header={<>My Groups {page > 0 && <small>Page {page + 1}</small>}</>} headerImage="https://www.habboassets.com/assets/images/catalog/icons/icon_203.png">
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
      <GridLarge>
        {canGoDown ?
          <ButtonNoBorder onClick={goBackOnePage}>
            <i className={groupMemberships.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-left'} />
          </ButtonNoBorder>
          : <div />}
        {
          canGoUp && (
            <ButtonNoBorder onClick={goUpOnePage}>
              <i className={groupMemberships.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-right'} />
            </ButtonNoBorder>
          )
        }
      </GridLarge>
    </Card>
  )
}