import React from 'react';
import { Link } from 'wouter';
import { Avatar } from '../avatar/Avatar';
import { UserOnlineStatus } from '@imagine-cms/types';
import { SmallUserProfileContainerProps } from './SmallUserProfileContainer.types';
import { SmallUserProfileContainerAvatarContainer, SmallUserProfileContainerBanner, SmallUserProfileContainerInformationContainer, SmallUserProfileContainerOnlineIndicator, SmallUserProfileContainerUserContainer, SmallUserProfileMottoContainer, SmallUserProfileRankContainer, SmallUserProfileUsernameContainer } from './SmallUserProfileContainer.styled';

export function SmallUserProfileContainer({ children, user, showOnlineStatus = true, showMotto = true, showRank = true, ...props }: SmallUserProfileContainerProps) {
  return (
    <div>
      <Link to={`/profile/${user.username}`}>
        <SmallUserProfileContainerUserContainer {...props}>
          <SmallUserProfileContainerBanner>
            <SmallUserProfileContainerAvatarContainer style={{ background: user.rank?.backgroundColor }}>
              <Avatar look={user.look ?? '-'} headDirection={3} size="l" />
            </SmallUserProfileContainerAvatarContainer>
          </SmallUserProfileContainerBanner>
          <SmallUserProfileContainerInformationContainer>
            <SmallUserProfileUsernameContainer className="notranslate">
              {user.username}
              {
                showOnlineStatus && <SmallUserProfileContainerOnlineIndicator $online={user.onlineStatus === UserOnlineStatus.Online} />
              }
            </SmallUserProfileUsernameContainer>
            {
              showRank && (
                <Link to={`/ranks/${user.rank!.id}`}>
                  <SmallUserProfileRankContainer className="notranslate">
                    {user.rank!.name}
                  </SmallUserProfileRankContainer>
                </Link>
              )
            }
            {showMotto && (
              <>
                {user.motto && !children && (
                  <SmallUserProfileMottoContainer className="notranslate">
                    "{user.motto}"
                  </SmallUserProfileMottoContainer>
                )}
                {
                  children && (
                    <SmallUserProfileMottoContainer>
                      {children}
                    </SmallUserProfileMottoContainer>
                  )
                }
              </>
            )}
          </SmallUserProfileContainerInformationContainer>
        </SmallUserProfileContainerUserContainer>
      </Link>
    </div>
  )
}
