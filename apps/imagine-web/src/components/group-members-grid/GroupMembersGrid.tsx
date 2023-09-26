import React from 'react';
import { GroupMembersGridProps } from './GroupMembersGrid.types';

export function GroupMembersGrid({ groupID }: GroupMembersGridProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8 }}>
      Test
      Test
      Test
      Test
    </div>
  )
}