import React from 'react';
import { Avatar } from '../avatar/Avatar';
import { SmallUserProfileContainerAvatarContainer, SmallUserProfileContainerBanner, SmallUserProfileContainerInformationContainer, SmallUserProfileContainerOnlineIndicator, SmallUserProfileContainerUserContainer, SmallUserProfileRankContainer, SmallUserProfileUsernameContainer } from './SmallUserProfileContainer.styled';
import { SmallUserProfileContainerProps } from './SmallUserProfileContainer.types';

export function SmallUserProfileContainerMock({ showOnlineStatus = true }: Partial<SmallUserProfileContainerProps>) {
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
          {showOnlineStatus && <SmallUserProfileContainerOnlineIndicator $online={false} />}
        </SmallUserProfileUsernameContainer>
        <SmallUserProfileRankContainer className="notranslate">
          -
        </SmallUserProfileRankContainer>
      </SmallUserProfileContainerInformationContainer>
    </SmallUserProfileContainerUserContainer>
  )
}