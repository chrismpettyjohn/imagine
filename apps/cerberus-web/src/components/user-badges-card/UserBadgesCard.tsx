import React, { useEffect } from 'react';
import { Card } from '../../blocks/card/Card';
import { UserBadgesCardProps } from './UserBadgesCard.types';
import { useUserBadgeFetchMany } from '@imagine-cms/client';

export function UserBadgesCard({ user }: UserBadgesCardProps) {
  const fetchBadges = useUserBadgeFetchMany();

  useEffect(() => {
    fetchBadges.fetch({ userIDs: [user.id] })
  }, [user.id]);

  return (
    <Card header={<>Badges ({fetchBadges.data?.length ?? 0})</>}>
      {
        fetchBadges.loading && (
          <div style={{ display: 'flex', gap: 8 }}>
            <i className="fa fa-spinner fa-spin" />
            Loading badges...
          </div>
        )
      }
      {
        fetchBadges.data?.length === 0 && <p>No badges found</p>
      }
      {
        fetchBadges.data?.map(_ => (
          <div key={`user_badge_${_.id}`}>
            {_.badgeCode}
          </div>
        ))
      }
    </Card>
  )
}