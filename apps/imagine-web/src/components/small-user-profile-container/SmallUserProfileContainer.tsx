import React from 'react';
import { Link } from 'wouter';
import { Avatar } from '../avatar/Avatar';
import { UserOnlineStatus } from '@imagine-cms/types';
import { SmallUserProfileContainerProps } from './SmallUserProfileContainer.types';
import { SmallUserProfileContainerAvatarContainer, SmallUserProfileContainerInformationContainer, SmallUserProfileContainerInformationWrapper, SmallUserProfileContainerOnlineIndicator, SmallUserProfileContainerUserContainer } from './SmallUserProfileContainer.styled';

export function SmallUserProfileContainer({ user, showOnlineStatus = true }: SmallUserProfileContainerProps) {
  return (
    <Link to={`/profile/${user.username}`}>
      <SmallUserProfileContainerUserContainer>
        <SmallUserProfileContainerAvatarContainer>
          <Avatar look={user.look ?? '-'} />
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