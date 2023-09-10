import React from 'react';
import { Card } from '../../blocks/card/Card';
import { rankScopesLabels } from '@imagine-cms/types';
import { RankScopesCardProps } from './RankScopesCard.types';
import { ButtonDanger, ButtonPrimary } from '../../blocks/button/Button.remix';

export function RankScopesCard({ rank }: RankScopesCardProps) {
  return (
    <Card header="Permissions">
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', gap: 16 }}>
        {
          Object.keys(rankScopesLabels).map(scope => {
            // @ts-ignore
            const Button = rank.scopes[scope] ? ButtonPrimary : ButtonDanger;
            // @ts-ignore
            const value = rankScopesLabels[scope];
            return (
              <Button>{value}</Button>
            )
          })
        }
      </div>
    </Card>
  )
}