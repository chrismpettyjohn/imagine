import React from 'react';
import { Avatar } from '../avatar/Avatar';
import { SmallUserProfileContainerAvatarContainer, SmallUserProfileContainerInformationContainer, SmallUserProfileContainerOnlineIndicator, SmallUserProfileContainerUserContainer } from './SmallUserProfileContainer.styled';

export function SmallUserProfileContainerMock() {
  return (
    <SmallUserProfileContainerUserContainer>
      <SmallUserProfileContainerAvatarContainer>
        <Avatar look="-" />
      </SmallUserProfileContainerAvatarContainer>
      <SmallUserProfileContainerInformationContainer>
        <SmallUserProfileContainerOnlineIndicator $online={false} />
        <h3 className="notranslate">
          -
        </h3>
      </SmallUserProfileContainerInformationContainer>
    </SmallUserProfileContainerUserContainer>
  )
}