import React, { useEffect } from 'react';
import { Card } from '../../blocks/card/Card';
import { useSupportTicketFetchMany } from '@imagine-cms/client';
import { UserSanctionHistoryCardProps } from './UserSanctionHistoryCard.types';
import { Button } from '../../blocks/button/Button';

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
      <div style={{ display: 'flex', gap: 16 }}>
        {
          fetchSupportTickets.data?.map((_, i) => (
            <Button key={`sanction_history_${_.id}`}>
              Sanction {i}
            </Button>
          ))
        }
      </div>
    </Card>
  )
}