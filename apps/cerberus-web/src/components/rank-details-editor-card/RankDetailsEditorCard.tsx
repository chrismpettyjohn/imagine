import { toast } from 'react-toastify';
import { Card } from '../../blocks/card/Card';
import { Form } from '../../blocks/form/Form';
import { Input } from '../../blocks/input/Input';
import { Badge } from '../../blocks/badge/Badge';
import { RankUpdateInput } from '@imagine-cms/client';
import React, { SyntheticEvent, useState } from 'react';
import { RankCreateInputDTO } from '@imagine-cms/types';
import { Textarea } from '../../blocks/textarea/Textarea';
import { ButtonPrimary } from '../../blocks/button/Button.remix';
import { RankDetailsEditorCardProps } from './RankDetailsEditorCard.types';

export function RankDetailsEditorCard({ defaultRank, onSave }: RankDetailsEditorCardProps) {
  const [rankDTO, setRankDTO] = useState<RankUpdateInput>({
    name: defaultRank.name ?? '',
    badgeCode: defaultRank.badgeCode ?? '',
    siteShowStaff: defaultRank.siteShowStaff ?? false,
  });

  const onChanges = (changes: Partial<RankCreateInputDTO>) => {
    setRankDTO(_ => ({
      ..._,
      ...changes,
    }))
  }

  const onToggleShowStaff = () => {
    setRankDTO(_ => ({
      ..._,
      siteShowStaff: !_.siteShowStaff,
    }))
  }

  const isDisabled = !rankDTO.name || !rankDTO.badgeCode;

  const onSaveChanges = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      await onSave(rankDTO);
      toast.success(`Changes to ${rankDTO.name} saved`);
    } catch (e) {
      console.log(e)
      toast.error(`Failed to update ${defaultRank.name}`);
    }
  }

  return (
    <Card header="Details">
      <Form onSubmit={onSaveChanges}>
        <label>Name</label>
        <Input value={rankDTO.name} onChange={e => onChanges({ name: e.currentTarget?.value ?? '' })} />
        <label>Badge</label>
        <div style={{ display: 'flex', flex: 1, gap: 16 }}>
          <Badge badge={{ code: rankDTO.badgeCode } as any} height={45} />
          <Input value={rankDTO.badgeCode} onChange={e => onChanges({ badgeCode: e.currentTarget?.value ?? '' })} />
        </div>
        <div style={{ margin: 0, padding: 0 }}>
          <label>Show on staff page?</label>
          <input type="checkbox" checked={rankDTO.siteShowStaff} onChange={onToggleShowStaff} />
        </div>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
          <ButtonPrimary disabled={isDisabled} type="submit">Save Changes</ButtonPrimary>
        </div>
      </Form>
    </Card>
  )
}