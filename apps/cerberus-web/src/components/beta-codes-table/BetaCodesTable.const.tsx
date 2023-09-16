import React from 'react';
import { Link } from 'wouter';
import { BetaCodeFragment } from '@imagine-cms/client';
import { TableColumn } from "react-data-table-component";
import { BetaCodeDeleteButton } from '../beta-code-delete-button/BetaCodeDeleteButton';

export const BETA_CODES_TABLE_COLUMNS: TableColumn<BetaCodeFragment>[] = [
  {
    name: '',
    cell: ({ id, betaCode }) => (
      <Link href={`/beta-codes/${id}`}>
        {betaCode}
      </Link>
    ),
  },
  {
    name: 'User',
    // TODO: Display actual user fragment
    cell: ({ userID }) => (
      <>
        {userID}
      </>
    ),
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