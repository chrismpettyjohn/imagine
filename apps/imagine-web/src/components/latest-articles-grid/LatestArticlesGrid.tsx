import { Grid } from '../grid/Grid';
import React, { useEffect, useState } from 'react';
import { useArticleFetchMany } from '@imagine-cms/client';
import { LatestArticlesGridProps } from './LatestArticlesGrid.types';
import { LatestArticleContainer } from '../latest-article-grid-container/LatestArticleGridContainer';
import { GridLarge } from '../grid/Grid.remix';
import { ButtonNoBorder } from '../button/Button.remix';

const ARTICLES_PAGE_SIZE = 6;

export function LatestArticlesGrid({ showHeader = true }: LatestArticlesGridProps) {
  const [page, setPage] = useState(0)
  const fetchArticles = useArticleFetchMany();
  const canGoUp = (fetchArticles?.data?.length ?? 0) >= ARTICLES_PAGE_SIZE

  const canGoDown = page > 0;

  const goUpOnePage = () => {
    if (!canGoUp) {
      return;
    }
    setPage(_ => _ + 1);
  }

  const goBackOnePage = () => {
    if (!canGoDown) {
      return;
    }
    setPage(_ => _ - 1);
  }

  useEffect(() => {
    fetchArticles.fetch({ limit: ARTICLES_PAGE_SIZE });
  }, [page]);

  return (
    <>
      {showHeader && <h1>News Articles</h1>}
      <Grid>
        {
          fetchArticles.data?.map(_ => (
            <LatestArticleContainer article={_} key={`latest_article_${_.id}`} />
          ))
        }
      </Grid>
      <GridLarge style={{ marginTop: 16 }}>
        {canGoDown ?
          <ButtonNoBorder onClick={goBackOnePage}>
            <i className={fetchArticles.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-left'} />
          </ButtonNoBorder>
          : <div />}
        {
          canGoUp && (
            <ButtonNoBorder onClick={goUpOnePage}>
              <i className={fetchArticles.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-right'} />
            </ButtonNoBorder>
          )
        }
      </GridLarge>
    </>
  )
}
