import React from 'react';
import { Link } from 'wouter';
import { LargeGroupContainerProps } from './LargeGroupContainer.types';
import { LargeGroupContainerElement, LargeGroupContainerInformation } from './LargeGroupContainer.styled';

export function LargeGroupContainer({ group }: LargeGroupContainerProps) {
  return (
    <Link to={`/groups/${group.id}`}>
      <LargeGroupContainerElement>
        <img src="https://www.habborator.org/badges/badges/CY3.gif" />
        <LargeGroupContainerInformation>

          <h3 className="notranslate">{group.name}</h3>
          <h5 className="notranslate">{group.description}</h5>
        </LargeGroupContainerInformation>
      </LargeGroupContainerElement>
    </Link>
  )
}