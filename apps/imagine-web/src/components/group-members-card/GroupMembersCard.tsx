import { Card } from '../card/Card';
import React, { useEffect } from 'react';
import { GroupMembersCardProps } from './GroupMembersCard.types';
import { useGroupMembershipFetchMany } from '@imagine-cms/client';
import { SmallUserProfileContainerLazy } from '../small-user-profile-container/SmallUserProfileContainerLazy';
import { SmallUserProfileContainerMock } from '../small-user-profile-container/SmallUserProfileContainerMock';

export function GroupMembersCard({ groupID }: GroupMembersCardProps) {
  const fetchGroupMembers = useGroupMembershipFetchMany();
  const onFetchGroupMembers = async () => {
    fetchGroupMembers.fetch({ groupIDs: [groupID] })
  }
  useEffect(() => {
    onFetchGroupMembers();
  }, [groupID]);

  return (
    <Card header={<>Members ({fetchGroupMembers.data?.length ?? 0})</>}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8 }}>
        {
          fetchGroupMembers.loading && (
            <>
              <SmallUserProfileContainerMock />
            </>
          )
        }
        {
          fetchGroupMembers.data?.map(_ => (
            <SmallUserProfileContainerLazy key={`group_member_${groupID}_${_.userID}`} userID={_.userID} />
          ))
        }
      </div>
    </Card>
  )
}