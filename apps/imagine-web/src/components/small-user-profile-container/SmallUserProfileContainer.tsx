import React from 'react';
import { Link } from 'wouter';
import { Avatar } from '../avatar/Avatar';
import { UserOnlineStatus } from '@imagine-cms/types';
import { SmallUserProfileContainerProps } from './SmallUserProfileContainer.types';
import { SmallUserProfileContainerAvatarContainer, SmallUserProfileContainerBanner, SmallUserProfileContainerInformationContainer, SmallUserProfileContainerOnlineIndicator, SmallUserProfileContainerUserContainer, SmallUserProfileMottoContainer, SmallUserProfileRankContainer } from './SmallUserProfileContainer.styled';

export function SmallUserProfileContainer({ children, user, showOnlineStatus = true }: SmallUserProfileContainerProps) {
  return (
    <div>
      <Link to={`/profile/${user.username}`}>
        <SmallUserProfileContainerUserContainer>
          <SmallUserProfileContainerBanner />
          <SmallUserProfileContainerAvatarContainer style={{ background: user.rank?.backgroundColor }}>
            <Avatar look={user.look ?? '-'} />
          </SmallUserProfileContainerAvatarContainer>
          <SmallUserProfileContainerInformationContainer>
            <h3 className="notranslate">
              {user.username}
            </h3>
            {
              showOnlineStatus && <SmallUserProfileContainerOnlineIndicator $online={user.onlineStatus === UserOnlineStatus.Online} />
            }
          </SmallUserProfileContainerInformationContainer>
          <SmallUserProfileMottoContainer>
            <Link to={`/ranks/${user.rank!.id}`}>
              <SmallUserProfileRankContainer>
                {user.rank!.name}
              </SmallUserProfileRankContainer>
            </Link>
            <br />
            <span style={{ marginTop: 25 }}>
              "{user.motto}"
            </span>
          </SmallUserProfileMottoContainer>
        </SmallUserProfileContainerUserContainer>
      </Link>
      {children}
    </div>
  )
}
