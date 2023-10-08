import React from 'react';
import { Link } from 'wouter';
import { GroupBadge } from '../group-badge/GroupBadge';
import { LargeGroupContainerProps } from './LargeGroupContainer.types';
import { LargeGroupContainerElement, LargeGroupContainerInformation } from './LargeGroupContainer.styled';

export function LargeGroupContainer({ group }: LargeGroupContainerProps) {
  return (
    <Link to={`/groups/${group.id}`}>
      <LargeGroupContainerElement>
        <GroupBadge group={group} />
        <LargeGroupContainerInformation>

          <h3 className="notranslate">{group.name}</h3>
          <h5 className="notranslate">{group.description}</h5>
        </LargeGroupContainerInformation>
      </LargeGroupContainerElement>
    </Link>
  )
}