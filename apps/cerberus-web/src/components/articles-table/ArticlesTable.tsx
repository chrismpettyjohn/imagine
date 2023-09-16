import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useArticleFetchMany } from '@imagine-cms/client';
import { ARTICLES_TABLE_COLUMNS } from './ArticlesTable.const';


export function ArticlesTable() {
  const fetchArticles = useArticleFetchMany();

  useEffect(() => {
    fetchArticles.fetch({ limit: 25 });
  }, []);

  return (
    <DataTable
      columns={ARTICLES_TABLE_COLUMNS}
      data={fetchArticles.data ?? []}
    />
  );
};

export default ArticlesTable;