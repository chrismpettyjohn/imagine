import React from 'react';
import { SmallUserProfileContainerProps } from './SmallUserProfileContainer.types';
import { SmallUserProfileContainerAvatarContainer, SmallUserProfileContainerInformationContainer, SmallUserProfileContainerUserContainer } from './SmallUserProfileContainer.styled';
import { Link } from 'wouter';

export function SmallUserProfileContainer({ user }: SmallUserProfileContainerProps) {
  return (
    <Link to={`/profiles/${user.username}`}>
      <SmallUserProfileContainerUserContainer>
        <SmallUserProfileContainerAvatarContainer src={`https://images.habbox.fr/?figure=${user.look}`} />
        <SmallUserProfileContainerInformationContainer>
          <h3>{user.username}</h3>
        </SmallUserProfileContainerInformationContainer>
      </SmallUserProfileContainerUserContainer>
    </Link>
  )
}