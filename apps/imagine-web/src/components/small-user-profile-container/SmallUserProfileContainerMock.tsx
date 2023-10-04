import React from 'react';
import { Avatar } from '../avatar/Avatar';
import { SmallUserProfileContainerAvatarContainer, SmallUserProfileContainerBanner, SmallUserProfileContainerInformationContainer, SmallUserProfileContainerOnlineIndicator, SmallUserProfileContainerUserContainer, SmallUserProfileRankContainer, SmallUserProfileUsernameContainer } from './SmallUserProfileContainer.styled';

export function SmallUserProfileContainerMock() {
  return (
    <SmallUserProfileContainerUserContainer>
      <SmallUserProfileContainerBanner>
        <SmallUserProfileContainerAvatarContainer>
          <Avatar look="-" headDirection={3} size="l" />
        </SmallUserProfileContainerAvatarContainer>
      </SmallUserProfileContainerBanner>
      <SmallUserProfileContainerInformationContainer>
        <SmallUserProfileUsernameContainer className="notranslate">
          -
          <SmallUserProfileContainerOnlineIndicator $online={false} />
        </SmallUserProfileUsernameContainer>
        <SmallUserProfileRankContainer className="notranslate">
          -
        </SmallUserProfileRankContainer>
      </SmallUserProfileContainerInformationContainer>
    </SmallUserProfileContainerUserContainer>
  )
}