import React from 'react';
import { LongUserContainerProps } from './LongUserContainer.types';
import { LongUserContainerElement, LongUserContainerInformation } from './LongUserContainer.styled';
import { Link } from 'wouter';

export function LongUserContainer({ user }: LongUserContainerProps) {
  return (
    <Link to={`/profile/${user.username}`}>
      <LongUserContainerElement>
        <img src={`https://imager.habboon.pw/?figure=${user.look}&size=m&direction=2&head_direction=2&gesture=sml&headonly=1`} />
        <LongUserContainerInformation>

          <h3>{user.username}</h3>
          <img src={`https://habborator.org/badges/badges/${user.rank?.badgeCode || 'FAN'}.gif`} />
        </LongUserContainerInformation>
      </LongUserContainerElement>
    </Link>
  )
}