import React from 'react';
import { useRoute } from 'wouter';

export function PermissionsEditRankScreen() {
  const [, params] = useRoute<{ rankID: string }>('/permissions/:rankID');
  const rankID = Number(params!.rankID);
  return (
    <>
      <h1>Ranks <small>-&nbsp;{rankID}</small></h1>
      Hello world
    </>
  )
}