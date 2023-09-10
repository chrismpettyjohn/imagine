import React from 'react';
import { Link, useRoute } from 'wouter';
import { Card } from '../../blocks/card/Card';

export function PermissionsEditRankScreen() {
  const [, params] = useRoute<{ rankID: string }>('/permissions/:rankID');
  const rankID = Number(params!.rankID);
  return (
    <>
      <h1 style={{ alignItems: 'center', display: 'flex' }}>
        <Link href="/permissions"><i className="fa fa-caret-left fa-2x" style={{ cursor: 'pointer', marginRight: 8 }} /></Link>
        Ranks <small>-&nbsp;{rankID}</small></h1>
      <Card header="Details">
        No members found
      </Card>
      <Card header="Permissions">
        No members found
      </Card>
      <Card header="Members (0)">
        No members found
      </Card>
    </>
  )
}