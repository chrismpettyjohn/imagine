import { useRoute } from 'wouter';
import React, { useEffect } from 'react';
import { Card } from '../../components/card/Card';
import { useGroupFetchOne } from '@imagine-cms/client';

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
      <h1>Viewing Group:</h1>
      <br />
      <Card header={group?.name}>
        {
          fetchGroup.loading && (
            <i className="fa fa-spinner fa-spin" />
          )
        }
        {group?.description}
      </Card>
    </>
  )
}