import React, { useEffect } from 'react';
import { Card } from '../../blocks/card/Card';
import { Button } from '../../blocks/button/Button';
import { useSupportTicketFetchMany } from '@imagine-cms/client';
import { UserSupportTicketsCardProps } from './UserSupportTicketsCard.types';

export function UserSupportTicketsCard({ user }: UserSupportTicketsCardProps) {
  const fetchSupportTickets = useSupportTicketFetchMany();

  useEffect(() => {
    fetchSupportTickets.fetch({ reportingUserIDs: [user.id] })
  }, [user.id]);

  return (
    <Card header={<>Support Tickets ({fetchSupportTickets.data?.length ?? 0})</>}>
      {
        fetchSupportTickets.loading && (
          <div style={{ display: 'flex', gap: 8 }}>
            <i className="fa fa-spinner fa-spin" />
            Loading support tickets...
          </div>
        )
      }
      {
        fetchSupportTickets.data?.length === 0 && <p>No support tickets found</p>
      }
      {
        fetchSupportTickets.data?.map(_ => (
          <Button key={`sanction_history_${_.id}`}>
            {_.reportingUserID}
          </Button>
        ))
      }
    </Card>
  )
}