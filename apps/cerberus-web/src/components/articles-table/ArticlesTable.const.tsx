import React from 'react';
import { Link } from 'wouter';
import { Button } from '../../blocks/button/Button';
import { ArticleFragment } from '@imagine-cms/client';
import { TableColumn } from "react-data-table-component";
import { SmallUserContainer } from '../small-user-container/SmallUserContainer';

export const ARTICLES_TABLE_COLUMNS: TableColumn<ArticleFragment>[] = [
  {
    name: '',
    cell: article => (
      <div style={{ padding: 8 }}>
        <img src={article.imageURL} height={100} style={{ borderRadius: 8 }} />
      </div>
    )
  },
  {
    name: 'Name',
    selector: article => article.name,
  },
  {
    name: 'Shortstory',
    selector: article => article.description,
  },
  {
    name: 'Author',
    cell: article => <SmallUserContainer user={article.user} style={{ width: 200 }} />
  },
  {
    name: 'Tools',
    cell: ({ id }) => (
      <div style={{ display: 'flex', padding: 8 }}>
        <Link href={`/articles/${id}`}>
          <Button>
            <i className="fa fa-eye" /> View More
          </Button>
        </Link>
      </div>
    )
  },
]