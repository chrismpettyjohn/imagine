import React from 'react';
import { Link } from 'wouter';
import { Button } from '../../blocks/button/Button';
import { BetaCodeFragment } from '@imagine-cms/client';
import { TableColumn } from "react-data-table-component";

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
    cell: ({ id }) => (
      <div style={{ display: 'flex', padding: 8 }}>
        <Link href={`/beta-codes/${id}`}>
          <Button>
            <i className="fa fa-eye" /> View More
          </Button>
        </Link>
      </div>
    )
  },
]