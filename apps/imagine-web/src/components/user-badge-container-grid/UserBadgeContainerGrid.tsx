import React, { useEffect } from 'react';
import { useUserBadgeFetchMany } from '@imagine-cms/client';
import { BadgeContainer } from '../badge-container/BadgeContainer';
import { UserBadgeContainerGridProps } from './UserBadgeContainerGrid.types';
import { UserBadgeContainerGridElement } from './UserBadgeContainerGrid.styled';

export function UserBadgeContainerGrid({ user }: UserBadgeContainerGridProps) {
  const fetchUserBadges = useUserBadgeFetchMany();

  useEffect(() => {
    fetchUserBadges.fetch({ userIDs: [user.id], limit: 8 });
  }, [user.id]);

  return (
    <UserBadgeContainerGridElement>
      {
        fetchUserBadges.loading && <i className="fa fa-spinner fa-spin" />
      }
      {
        fetchUserBadges.data?.map(_ => (
          <BadgeContainer key={`user_badge_${_.id}`} badge={{ code: _.badgeCode } as any} />
        ))
      }
    </UserBadgeContainerGridElement>
  )
}