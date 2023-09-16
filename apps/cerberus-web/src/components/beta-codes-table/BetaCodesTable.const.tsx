import React from 'react';
import { BetaCodeFragment } from '@imagine-cms/client';
import { TableColumn } from "react-data-table-component";
import { SmallUserContainer } from '../small-user-container/SmallUserContainer';
import { BetaCodeDeleteButton } from '../beta-code-delete-button/BetaCodeDeleteButton';

export const BETA_CODES_TABLE_COLUMNS: TableColumn<BetaCodeFragment>[] = [
  {
    name: '',
    selector: betaCode => betaCode.betaCode,
  },
  {
    name: 'User',
    cell: betaCode => {
      if (!betaCode.user) {
        return null;
      }
      return <SmallUserContainer user={betaCode.user} />
    }
  },
  {
    name: 'Tools',
    cell: (betaCode: BetaCodeFragment) => (
      <div style={{ display: 'flex', padding: 8 }}>
        <BetaCodeDeleteButton betaCode={betaCode} onDelete={() => location.reload()} />
      </div>
    )
  },
]