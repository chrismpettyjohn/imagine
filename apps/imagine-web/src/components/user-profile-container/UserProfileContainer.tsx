import DayJS from 'dayjs';
import { Link } from 'wouter';
import { Badge } from '../badge/Badge';
import { Avatar } from '../avatar/Avatar';
import { configContext } from '@imagine-cms/web';
import React, { useContext, useMemo } from 'react';
import { UserProfileContainerProps } from './UserProfileContainer.types';
import { UserBadgeContainerGrid } from '../user-badge-container-grid/UserBadgeContainerGrid';
import { InformationContainer, UserProfileContainerContent, UserProfileContainerElement, UserProfileStat } from './UserProfileContainer.styled';

export function UserProfileContainer({ user }: UserProfileContainerProps) {
  const { config } = useContext(configContext);

  const joinedOn = useMemo(() => {
    return DayJS.unix(user.accountCreatedAt).format(config!.dateFormat);
  }, [user.accountCreatedAt, config!.dateFormat]);

  const lastVisit = useMemo(() => {
    return DayJS.unix(user.lastOnlineAt).format(config!.dateFormat);
  }, [user.lastOnlineAt, config!.dateFormat]);

  return (
    <UserProfileContainerElement>
      <UserProfileContainerContent>
        <Avatar look={user.look} direction={2} headDirection={3} gesture="sml" action="wav" size="l" />
        <InformationContainer>
          <div>

            <div style={{ display: 'flex', gap: 8 }}>
              <Link to={`/ranks/${user.rank.id}`}>
                <Badge badge={{ code: user.rank.badgeCode }} style={{ height: 45, marginTop: 10 }} />
              </Link>
              <h2 className="notranslate" style={{ color: user.rank.backgroundColor }}>
                {user.username}
              </h2>
            </div>
            {user.motto && <span className="notranslate">"{user.motto}"</span>}
          </div>
          <br />
          <UserBadgeContainerGrid user={user as any} />
        </InformationContainer>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 8 }}>
          <UserProfileStat>
            <div>Joined On</div>
            <b>{joinedOn}</b>
          </UserProfileStat>

          <UserProfileStat>
            <div>Last Visit</div>
            <b>{lastVisit}</b>
          </UserProfileStat>
        </div>
      </UserProfileContainerContent>
    </UserProfileContainerElement >
  )
}