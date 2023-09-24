import React from 'react';
import { Link } from 'wouter';
import { Badge } from '../badge/Badge';
import { Avatar } from '../avatar/Avatar';
import { LongUserContainerProps } from './LongUserContainer.types';
import { LongUserContainerElement, LongUserContainerInformation } from './LongUserContainer.styled';

export function LongUserContainer({ user }: LongUserContainerProps) {
  return (
    <Link to={`/profile/${user.username}`}>
      <LongUserContainerElement>
        <Avatar look={user.look ?? '-'} headOnly size="l" direction={2} headDirection={2} />
        <LongUserContainerInformation>

          <h3 className="notranslate">{user.username}</h3>
          <Badge badge={{ code: user.rank?.badgeCode }} />
        </LongUserContainerInformation>
      </LongUserContainerElement>
    </Link>
  )
}