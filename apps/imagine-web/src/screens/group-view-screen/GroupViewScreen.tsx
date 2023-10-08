import { Link, useRoute } from 'wouter';
import React, { useEffect } from 'react';
import { Card } from '../../components/card/Card';
import { useGroupFetchOne } from '@imagine-cms/client';
import { GroupMembersCard } from '../../components/group-members-card/GroupMembersCard';
import { LargeGroupContainer } from '../../components/large-group-container/LargeGroupContainer';
import { RoomGridContainerLazy } from '../../components/room-grid-container/RoomGridContainerLazy';
import { RoomGridContainerMock } from '../../components/room-grid-container/RoomGridContainerMock';
import { LargeGroupContainerMock } from '../../components/large-group-container/LargeGroupContainer.mock';
import { SmallUserProfileContainerLazy } from '../../components/small-user-profile-container/SmallUserProfileContainerLazy';
import { SmallUserProfileContainerMock } from '../../components/small-user-profile-container/SmallUserProfileContainerMock';

export function GroupViewScreen() {
  const [_, params] = useRoute<{ groupID: string }>('/groups/:groupID');
  const groupID = Number(params!.groupID);

  const fetchGroup = useGroupFetchOne();
  const group = fetchGroup?.data;

  useEffect(() => {
    fetchGroup.fetch({ id: groupID });
  }, [groupID]);


  return (
    <>
      <h1><Link to="/groups"><i className="fa fa-caret-left" style={{ cursor: 'pointer', marginRight: 8 }} /></Link>Viewing Group:</h1>
      {
        group ? <LargeGroupContainer group={group} /> : <LargeGroupContainerMock />
      }
      <br />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 16 }}>
        <div>
          <Card header="Owned By">
            {group ? <SmallUserProfileContainerLazy userID={group.userID} /> : <SmallUserProfileContainerMock />}
          </Card>
          <br />
          <Card header="Home Room">
            {
              group ? <RoomGridContainerLazy roomID={group.roomID} /> : <RoomGridContainerMock />
            }
          </Card>
        </div>
        <GroupMembersCard groupID={groupID} />
      </div>
    </>
  )
}