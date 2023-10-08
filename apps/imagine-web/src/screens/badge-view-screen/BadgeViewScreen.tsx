import React from 'react';
import { Link, useRoute } from 'wouter';
import { Card } from '../../components/card/Card';
import { GridSmallLarge } from '../../components/grid/Grid.remix';
import { UsersWithBadge } from './users-with-badge/UsersWithBadge';
import { BadgeContainer } from '../../components/badge-container/BadgeContainer';

export function BadgeViewScreen() {
  const [, params] = useRoute<{ badgeCode: string }>('/badges/:badgeCode');
  const badgeCode = params!.badgeCode;
  return (
    <>
      <h1><Link to="/badges"><i className="fa fa-caret-left" style={{ marginRight: 8 }} /></Link>Badges - {badgeCode}</h1>
      <GridSmallLarge>
        <Card header="About">
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 'fit-content' }}>
              <BadgeContainer badge={{ code: badgeCode }} />
            </div>
            <h4>{badgeCode}</h4>
          </div>
        </Card>
        <UsersWithBadge badgeCode={badgeCode} />
      </GridSmallLarge>
    </>
  )
}