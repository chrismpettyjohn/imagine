import { toast } from 'react-toastify';
import { Card } from '../../blocks/card/Card';
import { Form } from '../../blocks/form/Form';
import { Input } from '../../blocks/input/Input';
import { Badge } from '../../blocks/badge/Badge';
import { RankUpdateInput } from '@imagine-cms/client';
import { RankCreateInputDTO, RankFlagsWire, rankFlagsLabels } from '@imagine-cms/types';
import React, { SyntheticEvent, useState } from 'react';
import { RankScopesWire, rankScopesLabels } from '@imagine-cms/types';
import { RankDetailsEditorCardProps } from './RankDetailsEditorCard.types';
import { RankDetailsEditorCardPermissionsContainer } from './RankDetailsEditorCard.styled';
import { ButtonDanger, ButtonPrimary, ButtonSuccess } from '../../blocks/button/Button.remix';

export function RankDetailsEditorCard({ defaultRank, onSave }: RankDetailsEditorCardProps) {
  const [rankDTO, setRankDTO] = useState<RankUpdateInput>({
    name: defaultRank?.name ?? '',
    badgeCode: defaultRank?.badgeCode ?? '',
    siteShowStaff: defaultRank?.siteShowStaff ?? false,
    scopes: {
      accessAdminPanel: defaultRank?.scopes?.accessAdminPanel ?? false,
      manageArticles: defaultRank?.scopes?.manageArticles ?? false,
      manageUsers: defaultRank?.scopes?.manageUsers ?? false,
      manageRooms: defaultRank?.scopes?.manageRooms ?? false,
      managePermissions: defaultRank?.scopes?.managePermissions ?? false,
      manageSupportTickets: defaultRank?.scopes?.manageSupportTickets ?? false,
      manageRadioRequests: defaultRank?.scopes?.manageRadioRequests ?? false,
      manageBetaCodes: defaultRank?.scopes?.manageBetaCodes ?? false,
      manageStaffApplications: defaultRank?.scopes?.manageStaffApplications ?? false,
    },
    flags: {
      showOnStaffPage: defaultRank?.flags?.showOnStaffPage ?? false,
      acceptingApplications: defaultRank?.flags.acceptingApplications ?? false,
    },
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

  const onToggleScope = (key: keyof RankScopesWire) => {
    setRankDTO(_ => ({
      ..._,
      scopes: {
        ..._.scopes!,
        [key]: !_.scopes![key],
      }
    }))
  }

  const onToggleFlag = (key: keyof RankFlagsWire) => {
    setRankDTO(_ => ({
      ..._,
      flags: {
        ..._.flags!,
        [key]: !_.flags![key],
      }
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
      toast.error(`Failed to update ${defaultRank?.name}`);
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
        <RankDetailsEditorCardPermissionsContainer>
          <label>Permissions</label>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', gap: 16 }}>
            {
              Object.keys(rankScopesLabels).map(scope => {
                // @ts-ignore
                const Button = rankDTO.scopes[scope] ? ButtonSuccess : ButtonDanger;
                // @ts-ignore
                const value = rankScopesLabels[scope];
                return (
                  <Button key={`rank_scope_${scope}`} onClick={() => onToggleScope(scope as any)} type="button">{value}</Button>
                )
              })
            }
          </div>
        </RankDetailsEditorCardPermissionsContainer>
        <RankDetailsEditorCardPermissionsContainer>
          <label>Flags</label>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', gap: 16 }}>
            {
              Object.keys(rankFlagsLabels).map(flag => {
                // @ts-ignore
                const Button = rankDTO.flags[flag] ? ButtonSuccess : ButtonDanger;
                // @ts-ignore
                const value = rankFlagsLabels[flag];
                return (
                  <Button key={`rank_flag_${flag}`} onClick={() => onToggleFlag(flag as any)} type="button">{value}</Button>
                )
              })
            }
          </div>
        </RankDetailsEditorCardPermissionsContainer>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', marginTop: 16 }}>
          <ButtonPrimary disabled={isDisabled} type="submit">Save Changes</ButtonPrimary>
        </div>
      </Form>
    </Card>
  )
}