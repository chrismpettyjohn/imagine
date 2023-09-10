import React, { useEffect } from 'react';
import { Card } from '../../blocks/card/Card';
import { useSupportTicketFetchMany } from '@imagine-cms/client';
import { UserSanctionHistoryCardProps } from './UserSanctionHistoryCard.types';

export function UserSanctionHistoryCard({ user }: UserSanctionHistoryCardProps) {
  const fetchSupportTickets = useSupportTicketFetchMany();

  useEffect(() => {
    fetchSupportTickets.fetch({ offendingUserIDs: [user.id] })
  }, [user.id]);

  return (
    <Card header={<>Sanction History ({fetchSupportTickets.data?.length ?? 0})</>}>
      {
        fetchSupportTickets.loading && (
          <div style={{ display: 'flex', gap: 8 }}>
            <i className="fa fa-spinner fa-spin" />
            Loading sanctions...
          </div>
        )
      }
      {
        fetchSupportTickets.data?.length === 0 && <p>No sanctions found</p>
      }
      {
        fetchSupportTickets.data?.map(_ => (
          <div key={`sanction_history_${_.id}`}>
            {_.reportingUserID}
          </div>
        ))
      }
    </Card>
  )
}