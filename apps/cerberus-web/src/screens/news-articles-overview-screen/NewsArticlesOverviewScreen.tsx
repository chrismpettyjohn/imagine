import React from 'react';
import { ArticlesTableLazy } from '../../components/articles-table/ArticlesTable.lazy';

export function NewsArticlesOverviewScreen() {
  return (
    <>
      <h1>News Articles</h1>
      <ArticlesTableLazy />
    </>
  )
}
