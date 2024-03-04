import { toast } from 'react-toastify';
import { Card } from '../../blocks/card/Card';
import { Form } from '../../blocks/form/Form';
import { Input } from '../../blocks/input/Input';
import { Badge } from '../../blocks/badge/Badge';
import { RankUpdateInput } from '@imagine-cms/client';
import React, { SyntheticEvent, useState } from 'react';
import { RankScopesWire, rankScopesLabels } from '@imagine-cms/types';
import { RankDetailsEditorCardProps } from './RankDetailsEditorCard.types';
import { RankCreateInputDTO, RankFlagsWire, rankFlagsLabels } from '@imagine-cms/types';
import { RankDetailsEditorCardPermissionsContainer } from './RankDetailsEditorCard.styled';
import { ButtonDanger, ButtonPrimary, ButtonSuccess } from '../../blocks/button/Button.remix';

export function RankDetailsEditorCard({ defaultRank, onSave }: RankDetailsEditorCardProps) {
  const [rankDTO, setRankDTO] = useState<RankUpdateInput>({
    name: defaultRank?.name ?? '',
    badgeCode: defaultRank?.badgeCode ?? '',
    backgroundColor: defaultRank?.backgroundColor ?? '',
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
      manageBugReports: defaultRank?.scopes?.manageBugReports ?? false,
      manageBans: defaultRank?.scopes?.manageBans ?? false,
      manageChatlogs: defaultRank?.scopes?.manageChatlogs ?? false,
      manageGroups: defaultRank?.scopes?.manageGroups ?? false,
      manageLanguages: defaultRank?.scopes?.manageLanguages ?? false,
      manageRanks: defaultRank?.scopes?.manageRanks ?? false,
      manageSite: defaultRank?.scopes?.manageSite ?? false,
      manageWordFilter: defaultRank?.scopes?.manageWordFilter ?? false,
      manageStore: defaultRank?.scopes?.manageStore ?? false,
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
      toast.error(`Failed to update ${defaultRank?.name}`);
    }
  }

  return (
    <Card header="Details">
      <Form onSubmit={onSaveChanges}>
        <label>Name</label>
        <Input value={rankDTO.name} onChange={e => onChanges({ name: e.currentTarget?.value ?? '' })} />
        <label>Background Color</label>
        <Input value={rankDTO.backgroundColor} onChange={e => onChanges({ backgroundColor: e.currentTarget?.value ?? '' })} type="color" />
        <label>Badge</label>
        <div style={{ display: 'flex', flex: 1, gap: 16 }}>
          <Badge badge={{ code: rankDTO.badgeCode } as any} height={45} />
          <Input value={rankDTO.badgeCode} onChange={e => onChanges({ badgeCode: e.currentTarget?.value ?? '' })} />
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