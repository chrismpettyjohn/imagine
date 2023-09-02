import React from 'react';
import { SmallUserProfileContainerProps } from './SmallUserProfileContainer.types';
import { SmallUserProfileContainerAvatarContainer, SmallUserProfileContainerInformationContainer, SmallUserProfileContainerInformationWrapper, SmallUserProfileContainerOnlineIndicator, SmallUserProfileContainerUserContainer } from './SmallUserProfileContainer.styled';
import { Link } from 'wouter';
import { UserOnlineStatus } from '@imagine-cms/types';

export function SmallUserProfileContainer({ user, showOnlineStatus = true }: SmallUserProfileContainerProps) {
  return (
    <Link to={`/profiles/${user.username}`}>
      <SmallUserProfileContainerUserContainer>
        <SmallUserProfileContainerAvatarContainer>
          <img src={`https://images.habbox.fr/?figure=${user.look}`} />
        </SmallUserProfileContainerAvatarContainer>
        <SmallUserProfileContainerInformationWrapper>
          <SmallUserProfileContainerInformationContainer>
            {
              showOnlineStatus && <SmallUserProfileContainerOnlineIndicator $online={user.onlineStatus === UserOnlineStatus.Online} />
            }
            <h3>{user.username}</h3>
          </SmallUserProfileContainerInformationContainer>
        </SmallUserProfileContainerInformationWrapper>
      </SmallUserProfileContainerUserContainer>
    </Link>
  )
}