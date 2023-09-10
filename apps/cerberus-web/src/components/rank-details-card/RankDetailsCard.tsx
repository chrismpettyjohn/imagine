import React from 'react';
import { Card } from '../../blocks/card/Card';
import { Form } from '../../blocks/form/Form';
import { Input } from '../../blocks/input/Input';
import { Textarea } from '../../blocks/textarea/Textarea';
import { RankDetailsCardProps } from './RankDetailsCard.types';
import { ButtonPrimary } from '../../blocks/button/Button.remix';
import { Badge } from '../../blocks/badge/Badge';

export function RankDetailsCard({ rank }: RankDetailsCardProps) {
  return (
    <Card header="Details">
      <Form>
        <label>Name</label>
        <Input value={rank.name} />
        <label>Badge</label>
        <div style={{ display: 'flex', flex: 1, gap: 16 }}>
          <Badge badge={{ code: rank.badgeCode } as any} height={45} />
          <Input value={rank.badgeCode} />
        </div>
        <label>Description</label>
        <Textarea rows={10} value={rank.description} onChange={() => null} />
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
          <ButtonPrimary>Save Changes</ButtonPrimary>
        </div>
      </Form>
    </Card>
  )
}