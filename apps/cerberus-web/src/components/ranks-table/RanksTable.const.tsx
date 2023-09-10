import React from 'react';
import { Link } from 'wouter';
import { Badge } from '../../blocks/badge/Badge';
import { RankFragment } from '@imagine-cms/client';
import { Button } from '../../blocks/button/Button';
import { TableColumn } from "react-data-table-component";

export const RANKS_TABLE_COLUMNS: TableColumn<RankFragment>[] = [
  {
    name: '',
    cell: ({ id, badgeCode }) => (
      <Link href={`/permissions/${id}`}>
        <Badge badge={{ code: badgeCode } as any} height={45} />

      </Link>
    ),
  },
  {
    name: '',
    selector: (rank: RankFragment) => rank.name,
  },
  {
    name: 'Tools',
    cell: ({ id }) => (
      <div style={{ display: 'flex', padding: 8 }}>
        <Link href={`/permissions/${id}`}>
          <Button>
            <i className="fa fa-eye" /> View More
          </Button>
        </Link>
      </div>
    )
  },
]