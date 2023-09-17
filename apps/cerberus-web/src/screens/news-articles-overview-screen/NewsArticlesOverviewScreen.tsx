import React from 'react';
import { Link } from 'wouter';
import { Card } from '../../blocks/card/Card';
import { ButtonPrimary } from '../../blocks/button/Button.remix';
import { ArticlesTableLazy } from '../../components/articles-table/ArticlesTable.lazy';

export function NewsArticlesOverviewScreen() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>News Articles</h1>
        <Link to="/articles/create">
          <ButtonPrimary>
            <i className="fa fa-plus-circle" />&nbsp; Add
          </ButtonPrimary>
        </Link>
      </div>
      <Card>
        <ArticlesTableLazy />
      </Card>
    </>
  )
}
